// value as a reference

// with primitive data types we work in isolation
let a = 42
// it works as an isolated copy
let b = a
// actions with b will NOT affect a
b++
console.log('a', a) // a 42
console.log('b', b) // b 43


// with non-primitive (objects, arrays, functions) data types we doesn't work in isolation by default
let arr1 = [1, 2, 3]
// it works as a link
let arr2 = arr1
// actions with arr2 will affect arr1
arr2.push(4)
console.log('arr1', arr1) // arr1 [ 1, 2, 3, 4 ]
console.log('arr2', arr2) // arr2 [ 1, 2, 3, 4 ]


// in order to avoid this kind of mutation we need to return a copy of the array and work with it
let arr3 = [1, 2]
// concat method without parameters returns the copy of an array
let arr4 = arr3.concat()
// actions with arr2 will NOT affect arr1
arr4.push(3)
console.log('arr3', arr3) // arr3 [ 1, 2 ]
console.log('arr4', arr4) // arr4 [ 1, 2, 3 ]


// a link equals to its origin
// a copy doesn't equal to its origin
console.log(arr1 === arr2) // true
console.log(arr3 === arr4) // false
