// earlier declaration with var keyword
var num = 42
num = 'var num reassigned'
console.log(num)

// var is visible outside {}
if (true) {
  var a = 'var a'
}
console.log(a)

// let/const are visible inside {}
// if (true) {
//   let b = 'let b'
// }
// console.log(b)


// hoisting (possibility to access variable or function before its declaration)
// undefined
console.log(c)
var c = 'var c'

// we are able to access var variable before its declaration
d = 'var d reassigned'
console.log(d)
var d = 'var d'

// we are NOT able to access let/const variable before its declaration
// e = 'var e reassigned'
// console.log(e)
// let e = 'let e'

// const (no possibility to reassign variable)
const COLOR = 'const COLOR'
// COLOR = 'const COLOR reassigned'
console.log(COLOR)

const array1 = [1, 1, 1]
// array1 = 'string'
console.log(array1)

// however we can reassign array or object values
const array2 = [1, 2, 3, 5, 8]
console.log(array2)
array2.push(13)
console.log(array2)

const obj = {name: 'Lich'}
console.log(obj)
obj.surname = 'King'
console.log(obj)
