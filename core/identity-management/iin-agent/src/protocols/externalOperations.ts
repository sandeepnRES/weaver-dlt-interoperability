/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import iin_agent_pb from '@hyperledger-labs/weaver-protos-js/identity/agent_pb';
import { handlePromise, getLedgerBase, getIINAgentClient, defaultCallback } from '../common/utils';
import { LedgerBase } from '../common/ledgerBase';


// Handles communication with foreign IIN agents
export const syncExternalStateFromIINAgent = async (securityDomainUnit: iin_agent_pb.SecurityDomainMemberIdentity) => {
    console.log('syncExternalStateFromIINAgent:', securityDomainUnit.getSecurityDomain(), '-', securityDomainUnit.getMemberId());
};

// Generates network unit's state/configuration
export const requestIdentityConfiguration = async (request: iin_agent_pb.SecurityDomainMemberIdentityRequest) => {
    const sourceSecurityDomain = request.getSourceNetwork()!.getSecurityDomain()
    const sourceMemberId = request.getSourceNetwork()!.getMemberId()
    console.log('requestIdentityConfiguration:', sourceSecurityDomain, '-', sourceMemberId);
    
    const ledgerBase = getLedgerBase(sourceSecurityDomain, sourceMemberId)
    const attestedMembership = await ledgerBase.getAttestedMembership(sourceSecurityDomain, request.getNonce());
    const iinAgentClient = getIINAgentClient(request.getRequestingNetwork()!.getSecurityDomain(), request.getRequestingNetwork()!.getMemberId())
    iinAgentClient.sendIdentityConfiguration(attestedMembership, defaultCallback)
};

// Processes foreign security domain unit's state/configuration received from a foreign IIN agent
export const sendIdentityConfiguration = async (attestedMembership: iin_agent_pb.AttestedMembership) => {
    const attestation = attestedMembership.getAttestation();
    if (attestation) {
        const securityDomainUnit = attestation.getUnitIdentity();
        if (securityDomainUnit) {
            console.log('sendIdentityConfiguration:', securityDomainUnit.getSecurityDomain(), '-', securityDomainUnit.getMemberId());
        }
    }
};
