// passing by value vs passing by reference

// primitive data types passed by value
let a = 42
// it works as an isolated copy, they no longer have a relationship
let b = a
// actions with b will NOT affect a
b++
console.log('a', a) // a 42
console.log('b', b) // b 43


// non-primitive (objects, arrays, functions) data types passed by reference
let array1 = [1, 2, 3]
// it works as a link to the same location in memory
let array2 = array1
// actions with array2 will affect array1 and vice versa
array2.push(4)
console.log('array1', array1) // array1 [ 1, 2, 3, 4 ]
console.log('array2', array2) // array2 [ 1, 2, 3, 4 ]


// in order to avoid this kind of mutation we need to return a copy of the array and work with it
let array3 = [1, 2]
// concat method without parameters returns the copy of an array
let array4 = array3.concat()
// actions with array2 will NOT affect array1
array4.push(3)
console.log('array3', array3) // array3 [ 1, 2 ]
console.log('array4', array4) // array4 [ 1, 2, 3 ]


// a link equals to its origin
// a copy doesn't equal to its origin
console.log(array1 === array2) // true
console.log(array3 === array4) // false
