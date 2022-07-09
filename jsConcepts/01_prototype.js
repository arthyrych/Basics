// the 'root' object
const being = {
  name: 'Nameless',
  race: 'elder',
  age: 10000,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
}
console.log(being)
being.greet()

// first object creation
const elf = {
  name: 'Legolas',
  race: 'elf',
  age: 356,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
}
console.log(elf)
elf.greet()

// second object creation
const human = new Object({
  name: 'Aragorn',
  race: 'human',
  age: 98,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
})
console.log(human)
human.greet()

// object creation from the first created object
const dwarf = Object.create(being)
dwarf.name = 'Gimli'
dwarf.race = 'dwarf'
dwarf.age = 38
console.log(dwarf)
dwarf.greet()

// adding a new method to the Object prototype
Object.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`)
}
elf.sayHello()
human.sayHello()
dwarf.sayHello()

// // own example

// const root = new Object({
//   rootProp: 'Root property.',
//   rootMethod: function() {
//     console.log('Root method was called.')
//   }
// })

// const child = Object.create(root)
// child.childProp = 'Child property.'
// child.childMethod = function() {console.log('Child method was called.')}

// console.log(child.rootProp)
// child.rootMethod()
// console.log(child.childProp)
// child.childMethod()
