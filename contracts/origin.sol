// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Origin {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    event Reactive(uint8);
    function launch() public {
        emit Reactive(10);
    }
}
