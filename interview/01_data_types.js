// 7 data types (all primitive except objects)
// null, undefined, boolean, number, string, symbol (es6), object

console.log(typeof null) // object (typeof operator inaccuracy)
console.log(typeof undefined) // undefined
console.log(typeof true) // boolean
console.log(typeof 0) // number
console.log(typeof NaN) // number
console.log(typeof 'string') // string
console.log(typeof Symbol('JS')) // symbol
console.log(typeof Math) // object

// undefined - the variable wasn't declared or it was decraled without any value
// functions which return nothing return undefined by defult

// null - the variable was declared and the value was set to null


// type coercion
// false - '', 0, null, undefined, NaN, false
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean('0')) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(function() { })) // true


// string and number types
console.log(1 + '2') // string 12
console.log('' + 1 + 0) // string 10
console.log('' - 1 + 0) // number -1
console.log('3' * '8') // number 24
console.log(4 + 10 + 'px') // string 14px
console.log('px' + 5 + 10) // string px510
console.log('42' - 40) // number 2
console.log('42px' - 2) // NaN
console.log(null + 2) // number 2
console.log(undefined + 2) // NaN


// == vs ===
// == compares with type coercion
// === compares without type coercion
console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true
console.log('0' == 0) // true
console.log(0 == 0) // true
