//File Module

const { readFileSync, writeFileSync } = require('fs')

//READ the file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//Write to file, if file is not there then new file will be created
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
);

//To append the existing file

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);