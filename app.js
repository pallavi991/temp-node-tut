// const amount = 9;
// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);
// console.log(__dirname);
// setInterval(()=>{console.log("hello world")}, 1000)


// const os = require('os')

// info about current user
// const user = os.userInfo()
// console.log(user)

// methods returns the system uptime ins seconds
// console.log(`the System Upeime is ${os.uptime} seconds`);

// const currentOS = {
//     name:os.type(), 
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// npm -- global command, comes with node
// npm --version in the console

// local dependency -- use it only in this particular project
// npm i <packageName>


// Global dependency  -- use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)


//package.json -- manifest file(stores important info about project/package)
// manual approach (crate package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defalut)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);