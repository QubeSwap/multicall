import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
//import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    // Mainnets
    hardhat: {},
    localhost: { timeout: 600000 },
    seiMainnet: {
      url: "https://evm-rpc.sei-apis.com",
      accounts: [process.env.KEY_MAINNET!]
    },
	monadMainnet: {
      url: "https://rpc.monad.xyz",
      accounts: [process.env.KEY_MAINNET!]
    },
	ticsMainnet: {
      url: "https://rpc.qubetics.com",
      accounts: [process.env.KEY_MAINNET!]
    },
	bscMainnet: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [process.env.KEY_MAINNET!]
    },
	avaxMainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.KEY_MAINNET!]
    },
  },	
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
    customChains: [
	  {
        network: 'sei',
        chainId: 1329,
        urls: {
          apiURL: process.env.SEI_API_ENDPOINT || '',
          browserURL: process.env.SEI_EXPLORER || ''
        }
      },
	  {
        network: 'monad',
        chainId: 143,
        urls: {
          apiURL: process.env.MONAD_API_ENDPOINT || '',
          browserURL: process.env.MONAD_EXPLORER || ''
        }
      },
	  {
        network: "qubetics",
        chainId: 9030,
        urls: {
          apiURL: process.env.QUBETICS_API_ENDPOINT || '',
          browserURL: process.env.QUBETICS_EXPLORER || ''
        }
      },
	  {
        network: 'bsc',
        chainId: 56,
        urls: {
          apiURL: process.env.BSC_API_ENDPOINT || '',
          browserURL: process.env.BSC_EXPLORER || ''
        }
      },
	  {
        network: 'avalanche',
        chainId: 43114,
        urls: {
          apiURL: process.env.AVALANCHE_API_ENDPOINT || '',
          browserURL: process.env.AVALANCHE_EXPLORER || ''
        }
      }
    ]
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  // abiExporter: {
  //   path: "./data/abi",
  //   clear: true,
  //   flat: false,
  // },
};

export default config;
