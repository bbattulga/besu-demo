var Web3 = require("web3").Web3;

var web3 = new Web3('http://localhost:20000'); // your geth
var account = web3.eth.accounts.create();
console.log(account)

// { perm acc
//     address: '0x2bb44AF0B905B62f2181E9eeF4a5Fd0B60F233C7',
//     privateKey: '0x8465516cb49ff86b3e8442f7b2f25364bd1c19003a40f083dc74d896e18256db',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
// }

// { node ingress contract acc
//     address: '0x05C846281941c5914A972e0DF7D8D4d0b206Bf35',
//     privateKey: '0x61f3ef60c0c6452c8d6b7217a0fba2624179d937035c8539c4a0934672d4eaab',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
// }

// { account ingress acc
//     address: '0x4bc0D19FE1763390eF2A91e65464ef67eAc031a5',
//     privateKey: '0xdf4808e6b7dfd375cb322b1c38a7576bdb1359cdd899a922abb4d47107e1d230',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
// }