// CommnoJS, every file is module (by default)
//Modulus -- Encapsultes Code only share minimum
const names = require('./4-names');
const sayHi = require('./utils');
// console.log(names)
const data = require('./alternative-falvour')
// console.log(data)
require('./mind-grenad');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);