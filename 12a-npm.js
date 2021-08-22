// npm - global command, comes with node
// npm -- version

// local dependancy - use it only in this particular project
// npm i <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores import info about project/package)
// manual approch
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
console.log(items);
const newitems = _.flattenDeep(items);
console.log(newitems);
