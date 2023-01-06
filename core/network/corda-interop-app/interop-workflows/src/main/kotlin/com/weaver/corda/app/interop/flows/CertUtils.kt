/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.weaver.corda.app.interop.flows

import arrow.core.Either
import arrow.core.Left
import arrow.core.Right
import arrow.core.flatMap
import java.security.cert.X509Certificate
import java.security.PublicKey
import java.security.PrivateKey
import java.time.LocalDateTime
import java.time.ZoneId
import java.util.Base64
import java.security.Security;
import javax.crypto.*
import javax.crypto.spec.SecretKeySpec
import kotlin.random.Random
import com.google.protobuf.ByteString
import org.bouncycastle.jce.provider.BouncyCastleProvider

import com.weaver.protos.common.interop_payload.InteropPayloadOuterClass
import com.weaver.corda.app.interop.states.Member
import com.weaver.corda.app.interop.states.MembershipState

/**
 * The isCertificateWithinExpiry function checks whether the provided certificate is within its validity period.
 *
 * @param certificate The X509 certificate.
 * @return Returns an Either with an Error if the certificate is not within its validity period, or true.
 */
fun isCertificateWithinExpiry(certificate: X509Certificate): Either<Error, X509Certificate> = try {
    val currentDate = LocalDateTime.now()
    val certNotBeforeDate = certificate.notBefore.toInstant()
            .atZone(ZoneId.systemDefault()).toLocalDateTime()
    val certNotAfterDate = certificate.notAfter.toInstant()
            .atZone(ZoneId.systemDefault()).toLocalDateTime()
    if (! (currentDate > certNotBeforeDate && currentDate < certNotAfterDate)) {
        println("Verification Error: Certificate valid between $certNotBeforeDate and $certNotAfterDate.\n")
        Left(Error("Verification Error: Certificate is out of date"))
    } else {
        Right(certificate)
    }
} catch (e: Exception) {
    println("Error validating that certificate is within its validity period: ${e.message}.\n")
    Left(Error("Verification Error: Certificate is out of date: ${e.message}"))
}

/**
 * The verifyCaCertificate function is used to verify the identity of an external entity when the
 * corresponding [Member] for the entity in its [MembershipState] is represented by a certificate authority.
 *
 * The certificate authority member validation type allows for any user or application in the external
 * entity to be identified as a valid member of the membership as along as the certificate presented
 * was issued by the member's CA.
 *
 * @param requesterCertificate The X509 certificate of the requester.
 * @param memberCACertString The certificate string of the member's CA.
 * @return Returns an Either with an Error if the requester's certificate was not issued by the member's CA,
 * or if an exception was thrown. Will return true if the verification was successful.
 */
fun verifyCaCertificate(
        requesterCertificate: X509Certificate,
        memberCACertString: String): Either<Error, Unit> = try {
    println("Verifying the certificate was issued by the member's certificate authority")
    getCertificateFromString(memberCACertString).flatMap { memberCACertificate ->
        isCertificateWithinExpiry(memberCACertificate).flatMap {
            // The CA is automatically a member of the security domain
            if (requesterCertificate == memberCACertificate) {
                println("Verification of membership was successful.\n")
                Right(Unit)
            } else if (requesterCertificate.issuerX500Principal != memberCACertificate.subjectX500Principal) {
                // Check that the requester's certificate was issued by the member's CA
                println("Verification Error: Requester's certificate not issued by the member's CA")
                Left(Error("Verification Error: Requester's certificate not issued by the member's CA"))
            } else {
                // Check that the issuing signature on the requester's certificate is valid
                requesterCertificate.verify(memberCACertificate.publicKey)
                println("Verification of certificate according to the member's CA was successful.\n")
                Right(Unit)
            }
        }
    }
} catch (e: Exception) {
    println("Error verifying the certificate was issued by the member's CA: ${e.message}\n")
    Left(Error("Verification Error: Error verifying the certificate was issued by the member's CA: ${e.message}"))
}

/**
 * The verifyCertificateChain function is used to verify the identity of an external entity when the
 * corresponding [Member] for the entity in its [MembershipState] captures the certificates of requesting
 * entities, and the certificate chain up to the root CA.
 *
 * The certificate member validation type allows for fine-grained control of a source network on which
 * identities in an external network they trust. To verify identities using this validation type, the
 * requesting certificate issuer should be represented by the head of the list of certificates in the
 * certificate chain. This certificate should be issued by the next certificate in the list. Once the last
 * element in the list is reached, the last certificate in the list should be the root CA, and should be
 * self-issued.
 *
 * @param certificate The X509 certificate of the requester.
 * @param certificateChain The chain of issuing certificates.
 * @return Returns an Either with an Error if the chain of certificates could not be verified, or true
 * if the verification was successful.
 */
fun verifyCertificateChain(
        certificate: X509Certificate,
        certificateChain: List<String>): Either<Error, Unit> = try {
    // If certificateChain list is empty we should be at the root cert so check that the certificate is self-signed
    if (certificateChain.isEmpty() && certificate.subjectX500Principal != certificate.issuerX500Principal) {
        Left(Error("Verification Error: Error verifying certificate chain"))
    } else {
        if (certificateChain.isEmpty()) {
            Right(Unit)
        } else {
            // If the certificate chain is not empty, check the certificate is issued by the head of the list
            getCertificateFromString(certificateChain.last()).flatMap {issuingCertificate ->
                // Check the issuing cert is within its expiry
                isCertificateWithinExpiry(issuingCertificate).flatMap {
                    certificate.verify(issuingCertificate.publicKey)
                    verifyCertificateChain(issuingCertificate, certificateChain.dropLast(1))
                }
            }
        }
    }
} catch (e: Exception) {
    println("Error verifying the certificate chain: ${e.message}")
    Left(Error("Verification Error: Error verifying certificate chain: ${e.message}"))
}

/*
 * The x509CertToPem function extracts the PEM (privacy enhanced mail) certificate from the input X509Certificate
 */
fun x509CertToPem(cert: X509Certificate): String {
    val cert_begin = "-----BEGIN CERTIFICATE-----\n";
    val end_cert = "\n-----END CERTIFICATE-----";

    val derCert = cert.getEncoded();
    val pemCertPre = Base64.getEncoder().encodeToString(derCert).replace("(.{64})".toRegex(), "$1\n")
    val pemCert = cert_begin + pemCertPre + end_cert;
    return pemCert;
}

/*
 * The calcHmacSha256 function generates HMAC-SHA256 hash
 *
 * @param message The message to be hashed in ByteArray
 * @return Returns hashed ByteArray
 */
fun calcHmacSha256(message: ByteArray, secretKey: ByteArray): ByteArray {
    var hmacSha256: ByteArray
    try {
        val mac = Mac.getInstance("HmacSHA256")
        val secretKeySpec = SecretKeySpec(secretKey, "HmacSHA256")
        mac.init(secretKeySpec)
        hmacSha256 = mac.doFinal(message);
    } catch (e: Exception) {
        throw RuntimeException("Failed to calculate hmac-sha256", e);
    }
    return hmacSha256;
    
}

/*
 * Encrypts a message using ECIES
 */
fun encryptMessage(message: ByteArray, pubKey: PublicKey): ByteArray {
    Security.addProvider(BouncyCastleProvider());
    val cipher = Cipher.getInstance("ECIES", BouncyCastleProvider.PROVIDER_NAME);
    cipher.init(Cipher.ENCRYPT_MODE, pubKey);
    return cipher.doFinal(message)
}
/*
 * Decrypts a message using ECIES
 */
fun decryptMessage(cipherMessage: ByteArray, privKey: PrivateKey): ByteArray {
    Security.addProvider(BouncyCastleProvider());
    val cipher = Cipher.getInstance("ECIES", BouncyCastleProvider.PROVIDER_NAME);
    cipher.init(Cipher.DECRYPT_MODE, privKey);
    return cipher.doFinal(cipherMessage)
}

/*
 * Generate Confidential Payload as per protocol in RFC
 */
fun generateConfidentialInteropPayloadAndHash(payload: ByteArray, cert: String): ByteArray {
    // Generate a 16-byte random key for the HMAC
    val secretKey = ByteArray(16)
    Random.nextBytes(secretKey)
    
    val confidentialPayloadContents = InteropPayloadOuterClass.ConfidentialPayloadContents.newBuilder()
        .setPayload(ByteString.copyFrom(payload))
        .setRandom(ByteString.copyFrom(secretKey))
        .build()
        
    println("ConfidentialPayloadContents: "+confidentialPayloadContents.toByteArray().toBase64())
    
    val hash = calcHmacSha256(payload, secretKey)
    var x509Cert: X509Certificate = getCertificateFromString(cert).fold({
        throw Exception("Certificate invalid", it)
    }, {
        it
    })
    
    var encryptedPayload = ByteArray(0)
    if (x509Cert.publicKey != null) {
        // ECDSA
        println("pubkey: "+x509Cert.publicKey.getEncoded().toBase64())
        encryptedPayload = encryptMessage(confidentialPayloadContents.toByteArray(), x509Cert.publicKey)
    } else {
        // TODO: ED25519
        throw Exception("Encryption algorithm not supported")
    }
    
    val confidentialPayload = InteropPayloadOuterClass.ConfidentialPayload.newBuilder()
        .setEncryptedPayload(ByteString.copyFrom(encryptedPayload))
        .setHashType(InteropPayloadOuterClass.ConfidentialPayload.HashType.HMAC)
        .setHash(ByteString.copyFrom(hash))
        .build()

    println("Returning confidential payload")
	return confidentialPayload.toByteArray()
}

/*
 * Decrypt Confidential Payload and return ConfidentialPayloadContents
 */
fun decryptConfidentialPayload(payload: ByteArray, privateKeyString: String): InteropPayloadOuterClass.ConfidentialPayloadContents {
    val privateKey = getECDSAPrivateKeyFromString(privateKeyString).fold({
        //TODO: Try reading ED25519 key
        throw Exception("Currently can read only ECDSA Keys: ", it)
    }, {
        it
    })
    val decryptedPayload = decryptMessage(payload, privateKey)
    val viewContents = InteropPayloadOuterClass.ConfidentialPayloadContents.parseFrom(decryptedPayload)
    return viewContents
}