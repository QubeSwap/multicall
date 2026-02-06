import { ethers, run, network } from "hardhat";

async function main() {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const networkName = network.name;
  // Check if the network is supported.
  if (networkName === "monadTestnet" || networkName === "monadMainnet") {
    console.log(`Deploying to ${networkName} network...`);

    // Compile contracts.
    await run("compile");
    console.log("Compiled contracts...");

    const QubeInterfaceMulticallV2 = await ethers.getContractFactory("QubeInterfaceMulticallV2");
    const qubeInterfaceMulticallV2 = await QubeInterfaceMulticallV2.deploy();
    await qubeInterfaceMulticallV2.deployed();

    console.log("qubeInterfaceMulticallV2 deployed to:", qubeInterfaceMulticallV2.address);
	
	await run('verify:verify', { address: qubeInterfaceMulticallV2.address });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
