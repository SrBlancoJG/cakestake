const path = require("path");
require("dotenv").config()
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "^0.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  networks: {
    develop: {
      network_id: "*",
      host: 'localhost',
      port: 7545
    },
    testnet: {
      provider: () => {return new HDWalletProvider(
        process.env.PRIVATE_KEY,
        'https://data-seed-prebsc-1-s1.binance.org:8545',
      )},
      network_id: 97,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  }
};
