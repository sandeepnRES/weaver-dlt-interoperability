
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Interop {
    event Response(bool success, bytes data);

    function handleExternalRequest(address payable _addr, bytes memory encoded_fn_call) public payable returns (bytes memory) {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            encoded_fn_call
        );
        
        require(success, "failed calling transaction"); 
        emit Response(success, data);

		return data;
    }

    function writeExternalState() public {
    }
}
