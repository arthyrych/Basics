// context isn't scope
// scope represents visibility of the variables
// context represents an object to which a function belongs

const person = {
  surname: 'Stark',
  knows: function(what, name) {
    console.log(`You know ${what}, ${name} ${this.surname}.`)
  }
}
person.knows('everything', 'Bran') // You know everything, Bran Stark.

const john = {surname: 'Snow'}
// method call/apply applies context for the function and executes it at once
person.knows.call(john, 'nothing', 'John') // You know nothing, John Snow.
person.knows.apply(john, ['nothing', 'John']) // You know nothing, John Snow.
// method bind applies context for the function and doesn't executes it at once
person.knows.bind(john, 'nothing', 'John')() // You know nothing, John Snow.


// explicit binding (way to pass context)
function logThis () {
  console.log(this)
}
const obj = {num: 33}
logThis.apply(obj) // { num: 33 }
logThis.call(obj) // { num: 33 }
logThis.bind(obj)() // { num: 33 }


// implicit binding (way to pass context)
const obj2 = {
  num: 34,
  logThis: function() {
    console.log(this)
  }
}
obj2.logThis() // { num: 34, logThis: [Function: logThis] }


// IMPORTANT: 
// arrow functions don't create their own context and lexically inherit `this` from the surrounding scope
// function declaration and function expression create their own context and dynamically bind `this`
