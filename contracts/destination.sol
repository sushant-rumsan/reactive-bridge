// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Destination {
    event Reactive(uint8);
    function launch() public {
        emit Reactive(10);
    }
}