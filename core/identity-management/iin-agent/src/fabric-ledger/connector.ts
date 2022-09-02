/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Contract } from 'fabric-network';
import * as path from 'path';
import * as fs from 'fs';

import iin_agent_pb from '@hyperledger-labs/weaver-protos-js/identity/agent_pb';
import { InteroperableHelper } from '@hyperledger-labs/weaver-fabric-interop-sdk'

import { LedgerBase } from '../common/ledgerBase';
import { walletSetup } from './walletUtils';
import { getAllMSPConfigurations, invokeFabricChaincode, queryFabricChaincode } from './networkUtils';

export class FabricConnector extends LedgerBase {
    connectionProfilePath: string;
    configFilePath: string;
    networkId: string;
    orgMspId: string;
    walletPath: string;
    iinAgentUserName: string;

    constructor(ledgerId: string, contractId: string, networkId: string, configFilePath: string) {
        weaverCCId = contractId ? contractId : 'interop'
        super(ledgerId, weaverCCId);
        //this.connectionProfilePath = connectionProfilePath ? connectionProfilePath : path.resolve(__dirname, './', 'connection_profile.json');
        //this.walletPath = walletPath ? walletPath : path.join(process.cwd(), `wallet-${this.networkId}`);
        this.configFilePath = configFilePath ? configFilePath : path.resolve(__dirname, './', 'config.json');
        this.networkId = networkId ? networkId : 'network1';
        if (!fs.existsSync(configFilePath)) {
            throw new Error('Config does not exist at path: ' + configFilePath);
        }
        const config = JSON.parse(fs.readFileSync(config_file_path, 'utf8').toString());
        this.iinAgentUserName = config.agent.name;
        this.orgMspId = config.mspId;
        this.connectionProfilePath = config.ccpPath ? config.ccpPath : path.resolve(__dirname, './', 'connection_profile.json');
        this.walletPath = walletPath ? walletPath : path.join(process.cwd(), `wallet-${this.networkId}-${this.orgMspId}`);
    }

    // Setup a user (with wallet and one or more identities) with contract invocation credentials
    async setupWalletIdentity() {
        walletSetup(this.walletPath, this.connectionProfilePath, this.configFilePath);
    }

    // Collect security domain membership info
    async getAttestedMembership(securityDomain: string, nonce: string): Promise<iin_agent_pb.AttestedMembership> {
        const membership = getAllMSPConfigurations(this.walletPath, this.connectionProfilePath, this.configFilePath, this.ledgerId);
        membership.setSecurityDomain(securityDomain)
        const membershipSerializedBase64 = Buffer.from(membership.serializeBinary()).toString('base64');
        const certAndSign = this.signMessage(membershipSerializedBase64 + nonce)
        
        const unitId = new SecurityDomainMemberIdentity()
        unitId.setSecurityDomain(securityDomain)
        unitId.setMemberId(this.orgMspId)
        
        const attestation = new Attestation()
        attestation.setUnitIdentity(unitId)
        attestation.setCertificate(certAndSign.certificate)
        attestation.setSignature(certAndSign.signature)
        
        const attestedMembership = new iin_agent_pb.AttestedMembership()
        attestedMembership.setMembership(membership)
        attestedMembership.setAttestation(attestation)
        return attestedMembership;
    }

    // Invoke a contract to drive a transaction
    // TODO: Add parameters corresponding to the output of a flow among IIN agents
    async invokeContract(): Promise<any> {
        return await invokeFabricChaincode(this.walletPath, this.connectionProfilePath, this.configFilePath, this.ledgerId, this.contractId, "", []);
    }

    // Query a contract to fetch information from the ledger
    async queryContract(): Promise<string> {
        return await queryFabricChaincode(this.walletPath, this.connectionProfilePath, this.configFilePath, this.ledgerId, this.contractId, "", []);
    }
    
    async private signMessage(message): Promise<{ certificate: string, signature: string }> {
        const config = getConfig();
        const wallet = await Wallets.newFileSystemWallet(this.walletPath);

        const [keyCert, keyCertError] = await handlePromise(
            InteroperableHelper.getKeyAndCertForRemoteRequestbyUserName(wallet, this.iinAgentUserName)
        )
        if (keyCertError) {
            throw new Error(`Error getting key and cert ${keyCertError}`)
        }
        const signature = InteroperableHelper.signMessage(
            message,
            keyCert.key.toBytes()
        ).toString("base64")
        return { certificate: keyCert.cert, signature: signature};
    }
}
