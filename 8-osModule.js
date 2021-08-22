//OS Module

const os = require('os')

//info about current user
const user = os.userInfo();

console.log(user);

//Method returns System uptime in seconds
console.log(`System uptime is ${os.uptime} seconds`);
