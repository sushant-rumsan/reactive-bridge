import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: ['0x416e77da32eeb38714f0e9a9caf0bd14ea29225d07d964aa2aee074575e817eb'],
    }
  }
};

export default config;
