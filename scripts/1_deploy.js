const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  
  // We get the contract to deploy
  const Anubit = await hre.ethers.getContractFactory("Anubit");
  console.log("Deploying Anubit...");

  const anubit = await upgrades.deployProxy(Anubit, {initializer: 'initialize', kind:'uups',unsafeAllow: ['state-variable-assignment']});  ;
  console.log(" Anubit deployed to:", anubit.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
