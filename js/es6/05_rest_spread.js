// rest
function average(a, b, ...args) {
  return args.reduce((acc, i) => acc += i, 0) / args.length
}

console.log(average(10, 20, 30, 40)) // 35
console.log(average(10, 20, 30)) // 30
console.log(average(10, 20)) // NaN

// spread
const array = [1, 2, 3, 5, 8, 13]
console.log(...array) // 1 2 3 5 8 13
console.log(Math.max(...array)) // 13
console.log(Math.min(...array)) // 1

const fib = [1, ...array]
console.log(fib)

// destructuring - receiving separate values from arrays or objects
const arr = [2, 4, 6, 8, 10]
const [a, b, ...c] = arr
console.log(a, b, c) // 2 4 [ 6, 8, 10 ]

const [x,, y] = arr // 2 6
console.log(x, y)

// object
const obj = {
  faction: 'Alliance',
  race: 'Human',
  power: 3.5,
  capital: 'Stormwind',
  concat: function() {
    return `${this.faction} ${this.race} ${this.power}`
  },
  log: function() {
    return this
  },
  logArr: () => {
    return this
  }
}

console.log(obj.concat()) // Alliance Human 3.5
// console.log(obj.log()) // creates obj context
// console.log(obj.logArr()) // doesn't create obj context

const {faction, race, power, concat: objConcat} = obj
console.log(faction, race, power) // Alliance Human 3.5
console.log(objConcat.call(obj)) // Alliance Human 3.5

const {capital, ...rest} = obj
console.log(capital) // Stormwind
console.log(rest) // all excluding Stormwind

const newObj = {...obj, faction: 'Horde', newProp: 'newValue'}
console.log(newObj) // faction value was changed and newProp was added
