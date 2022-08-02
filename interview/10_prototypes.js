// prototype is a parent object of the current object
// it works as a tree - root object from which inherit other objects from which inherit also other objects
// if we refer to a property/method and there is none in the current object it searches in the prototype object

// Object.getPrototypeOf() es5 syntax
// __proto__ es6 syntax

// class created with es5 syntax
function Cat (name, color) {
  this.name = name
  this.color = color
}

// with prototype we can extend functionality of the class
Cat.prototype.voice = function() {
  console.log(`${this.name} says meow meow!`)
}
console.log(Cat.prototype) // { voice: [Function (anonymous)] }

// creating a new instance of the class
const newCat = new Cat('Tom', 'black')
console.log(newCat) // Cat { name: 'Tom', color: 'black' }
// we have access to the voice method in prototype
newCat.voice() // Tom says meow meow!

console.log(newCat.__proto__ === Cat.prototype) // true


// class created with es5 syntax
function Person () { }
// adding properties to the prototype
Person.prototype.legs = 2
Person.prototype.hands = 2
Person.prototype.hasHair = true
// creating a new instance of the class
const newPerson = new Person()
newPerson.name = 'Ross'

// some checks
console.log('legs' in newPerson) // true
console.log('hands' in newPerson) // true
console.log('eyes' in newPerson) // false
console.log(newPerson.legs) // 2
console.log(newPerson.hands) // 2
console.log(newPerson.eyes) // undefined
console.log(newPerson.name) // Ross
console.log(newPerson.hasOwnProperty('legs')) // false
console.log(newPerson.hasOwnProperty('name')) // true


// will be used as a prototype object
const year = {year: 2022}
// creating a new object from prototype
const myYear = Object.create(year)

// some checks
console.log(myYear.year) // 2022
console.log(myYear.hasOwnProperty('year')) // false
console.log(myYear.__proto__ === year) // true

// if we change prototype's property it also affects property in the object we created from prototype
year.year = 2018
console.log(year.year) // 2018
console.log(myYear.year) // 2018
