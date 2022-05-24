/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.weaver.corda.sdk;

import java.util.Base64
import net.corda.core.utilities.OpaqueBytes
import net.corda.core.crypto.sha256
import kotlin.random.Random
import com.weaver.protos.common.asset_locks.AssetLocks.HashMechanism

/*
 * Interface for all hash functions to be used for HTLC
 * To extend supported hash functions in weaver for HTLC,
 * implement following interface, along with adding the same in
 * interopcc. If Hash has more than one element, create a protobuf for it,
 * and serialize the protobuf in base64 in getSerializedHashBase64 function.
 */
interface Hash {
    val preImage: String?
    val hash64: String
    val HASH_MECHANISM: HashMechanism
    fun generateRandomPreimage(length: Int)
    fun setPreimage(preImage: String)
    fun getPreimage(): String?;
    fun getSerializedPreimageBase64(): String?;
    fun setSerializedHashBase64(hash64: String)
    fun getSerializedHashBase64(): String;
}

/*
 * SHA256 Hash for HTLC, implementing above Hash Interface
 */
class SHA256(
    override var preImage: String? = null,
    override var hash64: String = "",
    override val HASH_MECHANISM: HashMechanism = HashMechanism.SHA256
) : Hash {
    override fun generateRandomPreimage(length: Int)
    {
        val bytes = ByteArray(length)
        Random.nextBytes(bytes)
        this.setPreimage(Base64.getEncoder().encodeToString(bytes));
    }
    override fun setPreimage(preImage: String) {
        this.preImage = preImage
        val preImageBytes = OpaqueBytes(preImage.toByteArray())
        this.hash64 = Base64.getEncoder().encodeToString(preImageBytes.sha256().bytes)
    }
    override fun getPreimage(): String? {
        return this.preImage
    }
    override fun getSerializedPreimageBase64(): String? {
        if (this.preImage == null)
            return null
        return Base64.getEncoder().encodeToString(this.preImage!!.toByteArray())
    }
    override fun setSerializedHashBase64(hash64: String) {
        this.hash64 = hash64
    }
    override fun getSerializedHashBase64(): String {
        if(this.hash64 != "")
            return this.hash64
        else
            throw Error("Error: Hash or Preimage needs to be set before access");
    }
    
}