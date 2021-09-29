//modulos nativos
const path = require('path')

const myModules = require('./exports.js')


console.log(path.basename(__filename))

console.log(myModules)