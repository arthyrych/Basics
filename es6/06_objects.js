// added dynamic fields
const job = 'leader'

const person = {
  age: 26,
  name: 'Thrall',
  job,
  'faction': 'horde',
  race: 'orc',
  toString: function() {
    return Object.keys(this).filter(key => key !== 'toString').map(key => this[key]).join(' ')
  }
}

console.log(person)
console.log(Object.keys(person)) // [ 'age', 'name', 'job', 'faction', 'race', 'toString' ]
console.log(Object.keys(person).map(key => person[key])) // [ 26, 'Thrall', 'leader', 'horde', 'orc', [Function: toString] ]
console.log(person.toString()) // 26 Thrall leader horde orc

// new way to declare a method
const obj = {
  newMethod(a) {
    return a * a
  }
}

console.log(obj.newMethod(3)) // 9

// new methods
const first = {a: 2}
const second = {b: 3}

console.log(Object.is(20, 20)) // true
console.log(Object.assign({}, first, second)) // { a: 2, b: 3 } - {} to avoid first obj change

const newObj = {x: 20, y: 30, z: 40}
console.log(Object.entries(newObj)) // [ [ 'x', 20 ], [ 'y', 30 ], [ 'z', 40 ] ]

console.log(Object.keys(newObj)) // [ 'x', 'y', 'z' ]
console.log(Object.values(newObj)) // [ 20, 30, 40 ]
