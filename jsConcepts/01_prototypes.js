// first object creation (usual way)
const being = {
  name: 'Nameless',
  race: 'elder',
  age: 10000,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
}
console.log(being) // { name: 'Nameless', race: 'elder', age: 10000, greet: [Function: greet] }
being.greet() // Greetings, elder!

// second object creation (usual way)
const elf = {
  name: 'Legolas',
  race: 'elf',
  age: 356,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
}
console.log(elf) // { name: 'Legolas', race: 'elf', age: 356, greet: [Function: greet] }
elf.greet() // Greetings, elf!

// third object creation (the way it works under the hood)
const human = new Object({
  name: 'Aragorn',
  race: 'human',
  age: 98,
  greet: function() {
    console.log(`Greetings, ${this.race}!`)
  }
})
console.log(human) // { name: 'Aragorn', race: 'human', age: 98, greet: [Function: greet] }
human.greet() // Greetings, human!

// fourth object creation (the way to create an empty object with selected prototype)
const dwarf = Object.create(being)
dwarf.name = 'Gimli'
dwarf.race = 'dwarf'
dwarf.age = 38
console.log(dwarf) // { name: 'Gimli', race: 'dwarf', age: 38 }
dwarf.greet() // Greetings, dwarf!

// adding a new method to the global Object class prototype
Object.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`)
}
elf.sayHello() // Hello, Legolas!
human.sayHello() // Hello, Aragorn!
dwarf.sayHello() // Hello, Gimli!
