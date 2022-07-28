// hoisting shows how the interpreter works and gives a possibility to get access to entities before their declaration

// the sum function declared below however we can invoke it
console.log(sum(1, 2)) // 3
function sum(a, b) {
  return a + b
}


// interpreter knows that the variable will be initialized further
// var i
console.log(i) // undefined
var i = 42
console.log(i) // 42


// const and let are NOT affected by hoisting
// console.log(number) // ReferenceError: Cannot access 'number' before initialization
const number = 8
console.log(number) // 8

// console.log(number2) // ReferenceError: Cannot access 'number2' before initialization
let number2 = 9
console.log(number2) // 9


// function declaration is affected by hoisting
console.log(square(25)) // 625
function square(num) {
  return num**2
}

// function expression is NOT affected by hoisting
console.log(cube(25)) // ReferenceError: Cannot access 'cube' before initialization
const cube = function(num) {
  return num**3
}
console.log(cube(25)) // 15625
