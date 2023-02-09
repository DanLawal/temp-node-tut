//modules
const names = require('./names')
const sayHi = require('./sayHi')
console.log(names)

sayHi('Susan')
sayHi(names.John)
sayHi(names.Peter)

