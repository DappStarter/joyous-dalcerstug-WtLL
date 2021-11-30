require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rate mad midnight grace near tackle turn'; 
let testAccounts = [
"0x5814d63d9818edfcf676b67bac973d914f44177dc730b46a551b71d5707447d7",
"0x242b41191b3f7af5bc781ead35f3c86c8fa5aec67afefee06097cd37eb286c85",
"0xd0ec30faad8a7a4684f32e4f346e786f54e052b885686719c1b372007d572b47",
"0x0eea46ee08d8663d5d70779904e8b840001d4ddf1ffb1401a6da9e3bd6c17488",
"0x5f427b65f1da33a7f19a0b2a57640b62771024c8a494f2922c2a8819ea931202",
"0xb8e6fde395351ab6c52956481b3dc9e7d2a36d35884bce16e1e16a8d17de1a6f",
"0x91100c89cfa4bc7005ef66f08837179bcfa13dda80606bac648ba78dcfa5a255",
"0x1ac524af1919a2f96e431b70eba7afe3a1229d489a35d92823832fa609d46a9f",
"0xebcf954817e10eaee5844f4fd403d0cb257727e242d5e9904373dd9892b1948b",
"0xe56448c29ac6e8d9a25da8715a6dc1a439edb456b436bd633ae4207c477db645"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


