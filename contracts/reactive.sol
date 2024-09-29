// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Reactive {
    event ReactiveEvent(uint8);
    function launch() public {
        emit ReactiveEvent(10);
    }
}