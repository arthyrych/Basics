// this will refer to the global object
function ref() {
  console.log('Reference:', this)
}
// ref()

// this will refer to the current object
const orc = {
  name: 'Thrall',
  age: 25,
  logRef: ref,
  logRefGlobal: ref.bind(global),
  logInfo: function(role) {
    console.group(`${this.name} info:`)
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}.`)
    console.log(`My role is ${role}.`)
    console.groupEnd()
  }
}
orc.logRef()
// orc.logRefGlobal()
orc.logInfo('leader')

// created new dwarf object and binding to orc object context
const dwarf = {
  name: 'Muradin',
  age: 38
}
// const dwarfInfo = orc.logInfo.bind(dwarf)
// dwarfInfo('butcher')
const dwarfInfo = orc.logInfo.bind(dwarf, 'butcher')
dwarfInfo()

// created new elf object and binding to orc object context
const elf = {
  name: 'Illidan',
  age: 10567
}
// bind method only binds to the context and the function should be called with ()
orc.logInfo.bind(elf, 'guard')()
// call method binds and calls the function immediately
orc.logInfo.call(elf, 'guard')
// apply method binds and calls the function immediately with an array scope of arguments
orc.logInfo.apply(elf, ['guard'])

// example prototype with context
const array = [1, 2, 3, 4, 5]
// function multBy(arr, num) {
//   return arr.map(function (i) {
//     return i * num
//   })
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function(num) {
  return this.map(function (i) {
    return i * num
  })
}
console.log(array.multBy(3))
