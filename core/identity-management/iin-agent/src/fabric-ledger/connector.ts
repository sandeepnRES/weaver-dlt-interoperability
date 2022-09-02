/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Contract } from 'fabric-network';
import { LedgerBase } from '../common/ledgerBase';
import { walletSetup } from './walletUtils';
import { getAllMSPConfigurations, invokeFabricChaincode, queryFabricChaincode } from './networkUtils';
import * as path from 'path';
import * as fs from 'fs';

export class FabricConnector extends LedgerBase {
    connectionProfilePath: string;
    configFilePath: string;
    networkId: string;
    orgMspId: string;
    walletPath: string;

    constructor(ledgerId: string, contractId: string, networkId: string, configFilePath: string) {
        super(ledgerId, contractId);
        //this.connectionProfilePath = connectionProfilePath ? connectionProfilePath : path.resolve(__dirname, './', 'connection_profile.json');
        //this.walletPath = walletPath ? walletPath : path.join(process.cwd(), `wallet-${this.networkId}`);
        this.configFilePath = configFilePath ? configFilePath : path.resolve(__dirname, './', 'config.json');
        this.networkId = networkId ? networkId : 'network1';
        if (!fs.existsSync(configFilePath)) {
            throw new Error('Config does not exist at path: ' + configFilePath);
        }
        const config = JSON.parse(fs.readFileSync(config_file_path, 'utf8').toString());
        this.orgMspId = config.mspId;
        this.connectionProfilePath = config.ccpPath ? config.ccpPath : path.resolve(__dirname, './', 'connection_profile.json');
        this.walletPath = config.walletPath ? config.walletPath : path.join(process.cwd(), `wallet-${this.networkId}`);
    }

    // Setup a user (with wallet and one or more identities) with contract invocation credentials
    async setupWalletIdentity() {
        walletSetup(this.walletPath, this.connectionProfilePath, this.configFilePath, this.networkId);
    }

    // Collect security domain membership info
    async getSecurityDomainMembership(): Promise<object> {
        const membership = getAllMSPConfigurations(this.walletPath, this.connectionProfilePath, this.configFilePath, this.ledgerId);
        // const securityDomainInfo = {
        //     securityDomain: this.networkId,
        //     members: memberships,
        // }
        membership.setSecurityDomain(this.networkId)
        return securityDomainInfo;
    }
    
    // Collect security domain membership info
    async getAttestedSecurityDomainMembership(): Promise<object> {
        const membershipObject = this.getSecurityDomainMembership()
        
        return securityDomainInfo;
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
}
