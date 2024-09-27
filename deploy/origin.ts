import {ethers} from 'ethers';

const main = async () => {
  console.log('Starting deployment process...');

  const ContractFactory = await ethers.getContractFactory('Origin');
  const contract = await ContractFactory.deploy();

  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error during deployment:', error);
    process.exit(1);
  })
