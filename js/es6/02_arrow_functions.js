// before
// function sum(a, b) {
//   return a + b
// }

// function cube(a) {
//   return a ** 3
// }

// with arrow functions we have shorter and more compact syntax
const sum = (a, b) => {
  return a + b
}

// one parametr can be used without parentheses
// const cube = a => {
//   return a ** 3
// }

// shorter version of the example above (in case we have just simple return)
const cube = a => a ** 3

console.log(sum(4, 5)) // 9
console.log(cube(3)) // 27


// before
setTimeout(function() {
  console.log('1 sec')
}, 1000)

// with arrow function
setTimeout(() => {
  console.log('2 sec')
}, 2000)

// with arrow function (shorter)
setTimeout(() => console.log('3 sec'), 3000)


// context
//before
function log() {
  console.log(this)
}

// with arrow function
const arrowLog = () => console.log(this)

const person = {
  name: 'Barak',
  age: 48,
  log: log,
  arrowLog: arrowLog
}
person.log() // person object
person.arrowLog() // empty object {} => global object

// old method creates its own context
// arrow function doesn't create its own context

// since function() creates its own context it's not able to use this (returns undefined)
const person2 = {
  name: 'Gray',
  age: 25,
  delayLog: function() {
    const self = this
    setTimeout(function() {
      console.log(self.name, self.age)
    }, 100)
  }
}
person2.delayLog()

// the soultion with arrow function
const person3 = {
  name: 'Jack',
  age: 23,
  delayLog: function() {
    setTimeout(() => {
      console.log(this.name, this.age)
    }, 200)
  }
}
person3.delayLog()
