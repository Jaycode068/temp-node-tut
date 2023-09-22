// Modules  - Encapsulated code (only share minimum)
// CommonJs, every file is a module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-generade')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)