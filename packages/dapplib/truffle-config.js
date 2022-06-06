require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note meadow mistake hope argue tail skin'; 
let testAccounts = [
"0x3557b037eb39a1480ad637cc557e17424a05ddc046a911e810acf722ed89d9dc",
"0x99119503c023e5a513cdbd7e56cd64110f7c982b350e24dd4a2e78bb56e684ac",
"0x1d01a5386fcece3d41d519c404d9d32516dd575cd42bd8a0696329befe8099b2",
"0x56d227abbb8d1c018a931500196d6858de9550d91a5c8a3f25cc59819b9c8ea3",
"0xceb2c4ad74de5ca5e34609e45851f6ce6d1b7a815378bdd1a4cff638918850ba",
"0x0b8de5fb45d4a70ea77cf360abb64d27dc8eab7a24fcf4e8a4a87e474fd20551",
"0x62f9d0e0ac45d1f488aa3f8c66739eb3e5ebff66e15f008820cad1a74574eb8d",
"0x628ddc25e25276dbb917f77b9a9d130d0c44d229645dd6a6ca1c502d5771f51c",
"0x2c35f0ea98766bd30e6a3d446b2c3ecfe10ffb894513e60a5435fb01bbf31080",
"0x07bb1964e8e53d5d7f5bd7eb56a4d84ede9732cfccb9f8385a60f82914cdc09a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

