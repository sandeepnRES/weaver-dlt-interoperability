/*
Copyright 2020 IBM All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package assetmanager

import (
	"crypto/sha256"
	"encoding/base64"
	"errors"
	"fmt"
	"time"

	"github.com/hyperledger-labs/weaver-dlt-interoperability/common/protos-go/common"
	log "github.com/sirupsen/logrus"

	//"google.golang.org/protobuf/proto"
	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric-sdk-go/pkg/gateway"
)

type GatewayContractInterface interface {
	SubmitTransaction(*gateway.Contract, string, ...string) ([]byte, error)
	EvaluateTransaction(*gateway.Contract, string, ...string) ([]byte, error)
}

type fabricGatewayContract struct{}

func (f fabricGatewayContract) SubmitTransaction(contract *gateway.Contract, ccFunc string, args ...string) ([]byte, error) {
	return contract.SubmitTransaction(ccFunc, args...)
}

func (f fabricGatewayContract) EvaluateTransaction(contract *gateway.Contract, ccFunc string, args ...string) ([]byte, error) {
	return contract.EvaluateTransaction(ccFunc, args...)
}

func NewGatewayContractInterface() GatewayContractInterface {
	return fabricGatewayContract{}
}

// helper functions to log and return errors
func logThenErrorf(format string, args ...interface{}) error {
	errorMsg := fmt.Sprintf(format, args...)
	log.Error(errorMsg)
	return errors.New(errorMsg)
}

// Create an asset exchange agreement structure
func createAssetExchangeAgreementSerializedBase64(assetType string, assetId string, recipientECertBase64 string, lockerECertBase64 string) (string, error) {
	assetAgreement := &common.AssetExchangeAgreement{
		Type:      assetType,
		Id:        assetId,
		Recipient: recipientECertBase64,
		Locker:    lockerECertBase64,
	}
	assetAgreementBytes, err := proto.Marshal(assetAgreement)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	return base64.StdEncoding.EncodeToString(assetAgreementBytes), nil
}

// Create a fungible asset exchange agreement structure
func createFungibleAssetExchangeAgreementSerializedBase64(assetType string, numUnits uint64, recipientECertBase64 string, lockerECertBase64 string) (string, error) {
	assetAgreement := &common.FungibleAssetExchangeAgreement{
		Type:      assetType,
		NumUnits:  numUnits,
		Recipient: recipientECertBase64,
		Locker:    lockerECertBase64,
	}
	assetAgreementBytes, err := proto.Marshal(assetAgreement)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	return base64.StdEncoding.EncodeToString(assetAgreementBytes), nil
}

// Create an asset lock structure
func createAssetLockInfoSerializedBase64(hashBase64 string, expiryTimeSecs uint64) (string, error) {
	lockInfoHTLC := &common.AssetLockHTLC{
		HashBase64:     []byte(hashBase64),
		ExpiryTimeSecs: expiryTimeSecs,
		TimeSpec:       common.AssetLockHTLC_EPOCH,
	}
	lockInfoHTLCBytes, err := proto.Marshal(lockInfoHTLC)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	lockInfo := &common.AssetLock{
		LockMechanism: common.LockMechanism_HTLC,
		LockInfo:      lockInfoHTLCBytes,
	}
	lockInfoBytes, err := proto.Marshal(lockInfo)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	return base64.StdEncoding.EncodeToString(lockInfoBytes), nil
}

// Create an asset claim structure
func createAssetClaimInfoSerializedBase64(hashPreimageBase64 string) (string, error) {
	claimInfoHTLC := &common.AssetClaimHTLC{
		HashPreimageBase64: []byte(hashPreimageBase64),
	}
	claimInfoHTLCBytes, err := proto.Marshal(claimInfoHTLC)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	claimInfo := &common.AssetClaim{
		LockMechanism: common.LockMechanism_HTLC,
		ClaimInfo:     claimInfoHTLCBytes,
	}
	claimInfoBytes, err := proto.Marshal(claimInfo)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	return base64.StdEncoding.EncodeToString(claimInfoBytes), nil
}

// function to generate a "SHA256" hash in base64 format for a given preimage
func GenerateSHA256HashInBase64Form(hashPreimage string) string {
	hasher := sha256.New()
	hasher.Write([]byte(hashPreimage))
	shaHash := hasher.Sum(nil)
	shaHashBase64 := base64.StdEncoding.EncodeToString(shaHash)

	return shaHashBase64
}

func CreateHTLC(gci GatewayContractInterface, contract *gateway.Contract, assetType string, assetId string, recipientECertBase64 string,
	hashBase64 string, expiryTimeSecs uint64) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if assetType == "" {
		return "", logThenErrorf("asset type not supplied")
	}
	if assetId == "" {
		return "", logThenErrorf("asset id not supplied")
	}
	if recipientECertBase64 == "" {
		return "", logThenErrorf("recipientECertBase64 id not supplied")
	}
	if hashBase64 == "" {
		return "", logThenErrorf("hashBase64 is not supplied")
	}
	currentTimeSecs := uint64(time.Now().Unix())
	if expiryTimeSecs <= currentTimeSecs {
		return "", logThenErrorf("supplied expirty time in the past")
	}

	assetExchangeAgreementStr, err := createAssetExchangeAgreementSerializedBase64(assetType, assetId, recipientECertBase64, "")
	if err != nil {
		return "", logThenErrorf(err.Error())
	}
	lockInfoStr, err := createAssetLockInfoSerializedBase64(hashBase64, expiryTimeSecs)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "LockAsset", assetExchangeAgreementStr, lockInfoStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction LockAsset: %+v", err.Error())
	}

	return string(result), nil
}

func CreateFungibleHTLC(gci GatewayContractInterface, contract *gateway.Contract, assetType string, numUnits uint64, recipientECertBase64 string,
	hashBase64 string, expiryTimeSecs uint64) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if assetType == "" {
		return "", logThenErrorf("asset type not supplied")
	}
	if numUnits <= 0 {
		return "", logThenErrorf("asset count must be a positive number")
	}
	if recipientECertBase64 == "" {
		return "", logThenErrorf("recipientECertBase64 id not supplied")
	}
	if hashBase64 == "" {
		return "", logThenErrorf("hashBase64 is not supplied")
	}
	currentTimeSecs := uint64(time.Now().Unix())
	if expiryTimeSecs <= currentTimeSecs {
		return "", logThenErrorf("supplied expirty time in the past")
	}

	assetExchangeAgreementStr, err := createFungibleAssetExchangeAgreementSerializedBase64(assetType, numUnits, recipientECertBase64, "")
	if err != nil {
		return "", logThenErrorf(err.Error())
	}
	lockInfoStr, err := createAssetLockInfoSerializedBase64(hashBase64, expiryTimeSecs)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "LockFungibleAsset", assetExchangeAgreementStr, lockInfoStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction LockFungibleAsset: %+v", err.Error())
	}

	return string(result), nil
}

func IsAssetLockedInHTLC(gci GatewayContractInterface, contract *gateway.Contract, assetType string, assetId string, recipientECertBase64 string, lockerECertBase64 string) (string, error) {

	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if assetType == "" {
		return "", logThenErrorf("asset type not supplied")
	}
	if assetId == "" {
		return "", logThenErrorf("asset id not supplied")
	}
	if recipientECertBase64 == "" {
		return "", logThenErrorf("recipientECertBase64 id not supplied")
	}
	if lockerECertBase64 == "" {
		return "", logThenErrorf("lockerECertBase64 id not supplied")
	}

	assetExchangeAgreementStr, err := createAssetExchangeAgreementSerializedBase64(assetType, assetId, recipientECertBase64, lockerECertBase64)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.EvaluateTransaction(contract, "IsAssetLocked", assetExchangeAgreementStr)
	if err != nil {
		return "", logThenErrorf("error in contract.EvaluateTransaction IsAssetLocked: %+v", err.Error())
	}

	return string(result), nil
}

func IsFungibleAssetLockedInHTLC(gci GatewayContractInterface, contract *gateway.Contract, contractId string) (string, error) {

	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}

	// Normal invoke function
	result, err := gci.EvaluateTransaction(contract, "IsFungibleAssetLocked", contractId)
	if err != nil {
		return "", logThenErrorf("error in contract.EvaluateTransaction IsFungibleAssetLocked: %+v", err.Error())
	}

	return string(result), nil
}

func IsAssetLockedInHTLCqueryUsingContractId(gci GatewayContractInterface, contract *gateway.Contract, contractId string) (string, error) {

	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}

	// Normal invoke function
	result, err := gci.EvaluateTransaction(contract, "IsAssetLockedQueryUsingContractId", contractId)
	if err != nil {
		return "", logThenErrorf("error in contract.EvaluateTransaction IsAssetLockedQueryUsingContractId: %+v", err.Error())
	}

	return string(result), nil
}

func ClaimAssetInHTLC(gci GatewayContractInterface, contract *gateway.Contract, assetType string, assetId string, lockerECertBase64 string, hashPreimageBase64 string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if assetType == "" {
		return "", logThenErrorf("asset type not supplied")
	}
	if assetId == "" {
		return "", logThenErrorf("asset id not supplied")
	}
	if lockerECertBase64 == "" {
		return "", logThenErrorf("lockerECertBase64 id not supplied")
	}
	if hashPreimageBase64 == "" {
		return "", logThenErrorf("hashPreimageBase64 is not supplied")
	}

	claimInfoStr, err := createAssetClaimInfoSerializedBase64(hashPreimageBase64)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	assetExchangeAgreementStr, err := createAssetExchangeAgreementSerializedBase64(assetType, assetId, "", lockerECertBase64)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "ClaimAsset", assetExchangeAgreementStr, claimInfoStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction ClaimAsset: %+v", err.Error())
	}

	return string(result), nil
}

func ClaimFungibleAssetInHTLC(gci GatewayContractInterface, contract *gateway.Contract, contractId string, hashPreimageBase64 string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}
	if hashPreimageBase64 == "" {
		return "", logThenErrorf("hashPreimageBase64 is not supplied")
	}

	claimInfoStr, err := createAssetClaimInfoSerializedBase64(hashPreimageBase64)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "ClaimFungibleAsset", contractId, claimInfoStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction ClaimFungibleAsset: %+v", err.Error())
	}

	return string(result), nil
}

func ClaimAssetInHTLCusingContractId(gci GatewayContractInterface, contract *gateway.Contract, contractId string, hashPreimageBase64 string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}
	if hashPreimageBase64 == "" {
		return "", logThenErrorf("hashPreimageBase64 is not supplied")
	}

	claimInfoStr, err := createAssetClaimInfoSerializedBase64(hashPreimageBase64)
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "ClaimAssetUsingContractId", contractId, claimInfoStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction ClaimAssetUsingContractId: %+v", err.Error())
	}

	return string(result), nil
}

func ReclaimAssetInHTLC(gci GatewayContractInterface, contract *gateway.Contract, assetType string, assetId string, recipientECertBase64 string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if assetType == "" {
		return "", logThenErrorf("asset type not supplied")
	}
	if assetId == "" {
		return "", logThenErrorf("asset id not supplied")
	}
	if recipientECertBase64 == "" {
		return "", logThenErrorf("recipientECertBase64 id not supplied")
	}

	assetExchangeAgreementStr, err := createAssetExchangeAgreementSerializedBase64(assetType, assetId, recipientECertBase64, "")
	if err != nil {
		return "", logThenErrorf(err.Error())
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "UnlockAsset", assetExchangeAgreementStr)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction UnlockAsset: %+v", err.Error())
	}

	return string(result), nil
}

func ReclaimFungibleAssetInHTLC(gci GatewayContractInterface, contract *gateway.Contract, contractId string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "UnlockFungibleAsset", contractId)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction UnlockFungibleAsset: %+v", err.Error())
	}

	return string(result), nil
}

func ReclaimAssetInHTLCusingContractId(gci GatewayContractInterface, contract *gateway.Contract, contractId string) (string, error) {
	if contract == nil {
		return "", logThenErrorf("contract handle not supplied")
	}
	if contractId == "" {
		return "", logThenErrorf("contractId not supplied")
	}

	// Normal invoke function
	result, err := gci.SubmitTransaction(contract, "UnlockAssetUsingContractId", contractId)
	if err != nil {
		return "", logThenErrorf("error in contract.SubmitTransaction UnlockAssetUsingContractId: %+v", err.Error())
	}

	return string(result), nil
}
