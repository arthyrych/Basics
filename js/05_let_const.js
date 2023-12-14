// var available inside function scope, affected by hoisting, can be reassigned or re-declared in the scope
// let available inside block scope, not affected by hoisting, can be reassigned but cannot be re-declared in the scope
// const available inside block scope, not affected by hoisting, cannot be reassigned or re-declared in the scope

// {} creates block scope in ES6

let a = 'variable a'
let b = 'variable b'
{
  // console.log(a) // variable a
  // console.log(b) // ReferenceError: Cannot access 'b' before initialization
  a = 'new variable a'
  let b = 'new variable b'
  console.log(a) // new variable a
  console.log(b) // new variable b
}
console.log(a) // new variable a
console.log(b) // variable b


const PORT = 8080
// PORT = 2000 // TypeError: Assignment to constant variable.

// but we can change inner values inside objects and arrays
const array = [1, 2, 3, 4]
array.pop()
array.push(5)
array.shift()
array.unshift(0)
console.log(array) // [ 0, 2, 3, 5 ]
array[0] = 'Hello'
array[1] = 'world'
array[2] = '!'
array.pop()
console.log(array) // [ 'Hello', 'world', '!' ]
// array = '' // TypeError: Assignment to constant variable.

const obj = {}
obj.name = 'Simple object'
obj.isHidden = false
console.log(obj) // { name: 'Simple object', isHidden: false }
obj.name = 'Changed name'
delete obj.isHidden
console.log(obj) // { name: 'Changed name' }
// obj = 13 // TypeError: Assignment to constant variable.
