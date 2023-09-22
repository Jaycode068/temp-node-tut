const { log } = require('console')
const os = require('os')

// Info about current user

const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

// Object returns information about the current OS

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)