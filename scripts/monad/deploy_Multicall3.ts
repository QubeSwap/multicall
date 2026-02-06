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

    const Multicall3 = await ethers.getContractFactory("Multicall3");
    const qubeMulticall3 = await Multicall3.deploy();
    await qubeMulticall3.deployed();

    console.log("qubeMulticall3 deployed to:", qubeMulticall3.address);
	
	await run('verify:verify', { address: qubeMulticall3.address });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
