/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.weaver.corda.app.interop.states

import com.weaver.corda.app.interop.contracts.AssetTransferContract
import net.corda.core.contracts.BelongsToContract
import net.corda.core.contracts.LinearState
import net.corda.core.contracts.ContractState
import net.corda.core.contracts.UniqueIdentifier
import net.corda.core.identity.AbstractParty
import net.corda.core.identity.Party
import net.corda.core.serialization.CordaSerializable
import java.time.Instant
import net.corda.core.contracts.StaticPointer

/**
 * The AssetPledgeState stores the details about the pledge of an asset in the source/exporting network for asset transfer.
 *
 * The AssetPledgeState is generated while pledging an asset during asset transfer.
 * This state is used to create proof about pledge (as part of interop query) for the importing network while claiming the asset.
 *
 * @property assetStatePointer Pointer to asset state pledged for asset-transfer.
 * @property locker The owner of asset before transfer in the exporting network who is pledging the asset.
 * @property lockerCert The certificate of the owner of asset in base64 form before transfer in the exporting network.
 * @property recipientCert Certificate of the asset recipient (in base64 format) in the importing network.
 * @property expiryTimeSecs The future time in epoch seconds till when the pledge on the asset holds good.
 * @property localNetworkId The id of the network in which the pledge is made.
 * @property remoteNetworkId The id of the network in which the pledged asset will be claimed.
 * @property linearId The unique identifier for this state object in the vault.
 */
@BelongsToContract(AssetTransferContract::class)
data class AssetPledgeState(
    val assetStatePointer: StaticPointer<ContractState>?,
    val locker: Party,
    val lockerCert: String,
    val recipientCert: String,
    val expiryTimeSecs: Long,
    val localNetworkId: String,
    val remoteNetworkId: String,
    override val linearId: UniqueIdentifier = UniqueIdentifier(assetStatePointer.hashCode().toString())
) : LinearState {
    // recipient is not a participant as that party may not be part of the exporting network
    override val participants: List<AbstractParty> get() = listOf(locker)
}
