import { GluegunCommand } from 'gluegun'
import { getNetworkConfig, commandHelp } from '../helper/helper'
import { getContractInstance } from '../helper/besu-functions'
import RLP from 'rlp'
//import { arrToBufArr } from 'ethereumjs-util'
const Web3 = require ("web3")
import { Keccak } from 'sha3'

const command: GluegunCommand = {
	name: 'interop',
	description: 'Interop Call for data sharing',
	run: async toolbox => {
		const {
 			print,
			parameters: { options }
		} = toolbox
		if (options.help || options.h) {
			commandHelp(
				print,
				toolbox,
				`besu-cli interop --network=network1 --param="a:b:1"`,
				'besu-cli interop --network=<network1|network2> --param=<colon-seperated-arguments>',
				[],
				command,
				['interop']
			)
			return
		}
		print.info('Interop Call')
		if(!options.network){
			print.error('Network ID not provided.')
			return
		}
		const networkConfig = getNetworkConfig(options.network)
		console.log('networkConfig', networkConfig)
	
		const provider = new Web3.providers.HttpProvider('http://'+networkConfig.networkHost+':'+networkConfig.networkPort)
		const web3N = new Web3(provider)


        const interopContract = await getContractInstance(provider, networkConfig.interopContract).catch(function () {
			console.log("Failed getting interopContract!");
		})
	
        var contractDict = {
            AliceERC20: "../simpleasset/build/contracts/AliceERC20.json",
            SimpleState: "../simplestate/build/contracts/SimpleState.json"
        }	

		const accounts = await web3N.eth.getAccounts()


        // Sample Remote Call
        /*const user_acc = accounts[options.param]
        const contractName = "AliceERC20"
        const functionName = "balanceOf(address)"
        const args = `${user_acc}`
        const returnType = "uint256"
        */
        
        /*const contractName = "AliceERC20"
        const functionName = "isFungibleAssetLocked(bytes32)"
        const args = '0x' + options.param
        const returnType = "bool"*/
        
        // SimpleState:get(string):a
        const params = options.param.split(":") 
        const contractName = params[0]
        const functionName = params[1]
        const argsArr = params.slice(2)
        
        console.log(`Contract: ${contractName}, Fn: ${functionName}, Args: ${argsArr}`)

        const remoteContract = await getContractInstance(provider, contractDict[contractName]).catch(function () {
			console.log("Failed getting remoteContract!");
		})
        const types = functionName.split("(")[1].split(")")[0].split(',')
        console.log(types)

        const encodedFn = web3N.eth.abi.encodeFunctionSignature(functionName);
        const encodedArgs = web3N.eth.abi.encodeParameters(types, argsArr);

        const encodedFnCall = encodedFn + encodedArgs.substring(2)

        console.log(`${encodedFn} \n ${encodedArgs} \n ${encodedFnCall}`)

		const contractOwner = accounts[0]
		var resTx = await interopContract.handleExternalRequest(remoteContract.address, encodedFnCall, {from: contractOwner}).catch(function() {
            console.log("Failed doing remote call");
        })
        //const response = web3N.eth.abi.decodeLog([returnType], resTx.logs[0].args.data)[0]
        const response = web3N.utils.hexToBytes(web3N.eth.abi.decodeLog(['bytes'],resTx.logs[0].args.data)[0])
		console.log(`Response from Remote Query: ${response}`)
        const res2 = Buffer.from(response).toString()
        console.log(`Response as String: ${res2}`)
        
        const txHash = resTx.logs[0].transactionHash
        console.log(`Response TxHash: ${txHash}`)
		console.log(`Response TxReceiptObj: ${JSON.stringify(resTx,null,2)}`)

        const block = await web3N.eth.getBlock(resTx.receipt.blockNumber)
        const tx = await web3N.eth.getTransaction(txHash)
        const txRcpt = await web3N.eth.getTransactionReceipt(txHash)
        console.log(`Tx by txHash: ${JSON.stringify(tx,null,2)}`)
		console.log(`Tx Rcpt by txHash: ${JSON.stringify(txRcpt,null,2)}`)
		console.log(`BlockHash: ${tx.blockHash}`)
		console.log(`Input: ${tx.input}`)
		console.log(`Block: ${JSON.stringify(block,null,2)}`)
        const hash_txHash = web3N.utils.sha3(JSON.stringify(block))
        console.log(`Hash of TxHash: ${JSON.stringify(hash_txHash)}`)
        console.log(`Extra Data: ${block.extraData}`)
        const extraDataDecoded = RLP.decode(block.extraData)
        console.log(`Extra Data Decoded: ${JSON.stringify(extraDataDecoded)}`)
        //const extraDataBuffers = arrToBufArr(extraDataDecoded)
        //console.log(`Extra Data Buffers: ${extraDataBuffers}`)
        const vanity = extraDataDecoded[0]
        console.log("vanity:", vanity)
        const validatorAddressesBytes = extraDataDecoded[1]
        const validatorAddressesHex = []
        console.log(`\nval addresses bytes:`)
        for (const valAdd of validatorAddressesBytes) {
            console.log(valAdd)
            validatorAddressesHex.push(web3N.utils.bytesToHex(valAdd))
        }
        console.log(`val addresses hex ${validatorAddressesHex}`) 
        const votes = extraDataDecoded[2]
        const round = extraDataDecoded[3]
        console.log(votes, "\n", round)
        
        const signaturesBytes = extraDataDecoded[4]
        const signaturesHex = []
        console.log(`\nSignatures bytes:`)
        for (const sign of signaturesBytes) {
            console.log(sign)
            signaturesHex.push(web3N.utils.bytesToHex(sign))
        }
        console.log(`Signatures hex ${signaturesHex}`)

        //const signers = []
        //for (const sign of signaturesHex) {
        //    signers.push(web3N.eth.accounts.recover(block.hash, sign))
        //}
        //console.log(`Signers Addresses : ${signers}`)
       
        const onChainBlockHash = await getHelp(block, web3N) 
        const signers2 = []
        for (const sgn of signaturesBytes) {
            const sign: Uint8Array = sgn as Uint8Array
            console.log(sign)
            //const signBuffer = Buffer.from(sign) 
            //let r = 0
            //let s =0
            let r = web3N.utils.bytesToHex(sign.slice(0, 32))
            let s = web3N.utils.bytesToHex(sign.slice(32, 64))
            let v = web3N.utils.bytesToHex(new Uint8Array([sign[64]+27]))
            console.log("Hash:", onChainBlockHash)
            console.log("Signature:", r, s, v)
            const signers_add = web3N.eth.accounts.recover({
                messageHash: onChainBlockHash, 
                v: v,
                r: r,
                s: s
            })
            signers2.push(signers_add)
            console.log("Signer Address:", signers_add)
        }

        console.log(`Signers Addresses : ${signers2}`)
        console.log(`val addresses hex ${validatorAddressesHex}`) 

        var sb64 = Buffer.from(signaturesBytes[0]).toString('base64')
        const bhash_bytes = web3N.utils.hexToBytes(block.hash)
        var bhashb64 = Buffer.from(bhash_bytes).toString('base64')
        console.log(`${sb64} \n ${bhash_bytes} \n ${bhashb64}`)

        console.log(`\n${JSON.stringify(Buffer.from(sb64, 'base64'))} \n ${JSON.stringify(Buffer.from(bhashb64, 'base64'))}`)
        process.exit()
	}
}

async function getHelp(block_header, web3N) {
    var extra_data_bytes = []
    const ed_decoded = RLP.decode(block_header['extraData'])
    console.log(ed_decoded)
    extra_data_bytes.push(ed_decoded[0])
    extra_data_bytes.push(ed_decoded[1])
    extra_data_bytes.push(ed_decoded[2])
    extra_data_bytes.push(ed_decoded[3])
    console.log(extra_data_bytes)

    const extraDataEncoded = RLP.encode(extra_data_bytes)
    console.log(extraDataEncoded)
    /*const extraDataEncodedBytes = web3N.utils.bytesToHex(extraDataEncoded)
    console.log("a", extraDataEncodedBytes)
    console.log("b", block_header['extraData'])*/

    var block_header_bytes = []
    block_header_bytes.push(block_header["parentHash"])
    block_header_bytes.push(block_header["sha3Uncles"])
    block_header_bytes.push(block_header["miner"])
    block_header_bytes.push(block_header["stateRoot"])
    block_header_bytes.push(block_header["transactionsRoot"])
    block_header_bytes.push(block_header["receiptsRoot"])
    block_header_bytes.push(block_header["logsBloom"])

    block_header_bytes.push(web3N.utils.numberToHex(block_header["difficulty"]))
    //block_header_bytes.push(web3N.utils.hexToBytes(web3N.utils.numberToHex(block_header["number"])))
    block_header_bytes.push(web3N.utils.numberToHex(block_header["number"]))
    block_header_bytes.push(web3N.utils.numberToHex(block_header["gasLimit"]))
    block_header_bytes.push(web3N.utils.numberToHex(block_header["gasUsed"]))
    block_header_bytes.push(web3N.utils.numberToHex(block_header["timestamp"]))

    block_header_bytes.push(extraDataEncoded)
    block_header_bytes.push(block_header["mixHash"])
    /*block_header_bytes.push(web3N.utils.numberToHex(block_header["gasUsed"]))
    block_header_bytes.push(web3N.utils.numberToHex(block_header["difficulty"]))*/
    block_header_bytes.push(block_header["nonce"])


    //if ("baseFee" in block_header) {
    //    block_header_bytes.push(web3N.utils.hexToBytes(block_header["baseFee"]))
    //}
    console.log(block_header_bytes)
    const block_header_rlp_encoded = RLP.encode(block_header_bytes)
    console.log(block_header_rlp_encoded)
    const bh_rlp_buffer = Buffer.from(block_header_rlp_encoded)
    console.log(bh_rlp_buffer)

    const hash = new Keccak(256)
    hash.update(bh_rlp_buffer)
    const bh_hash_computed = hash.digest('hex')
    console.log(bh_hash_computed)
   
    const bh_hash3 = web3N.utils.sha3(block_header_rlp_encoded)
    console.log(bh_hash3)
    const bh_hash4 = web3N.utils.soliditySha3(block_header_rlp_encoded)
    console.log(bh_hash4)
    //return bh_hash_computed
    return bh_hash4
}

module.exports = command
