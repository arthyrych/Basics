// closure is when a function has access to variables from the outer function's scope (function inside function)
// function encloses variables from the outer function's scope and we have no direct access to the enclosed variables

// variable message is enclosed and we have no direct access to it except through the log method used by inner function
function sayHelloTo (name) {
  const message = 'Hello ' + name
  return function() {
    console.log(message)
  }
}
const helloToJoe = sayHelloTo('Joe')
console.log(helloToJoe) // Hello Joe
console.log(helloToJoe()) // undefined


// variable frameworks is enclosed and we have no direct access to it except through the object's methods
function createFrameworkManager () {
  const frameworks = ['Cypress', 'Playwright']
  return {
    print: function() {
      console.log(frameworks)
    },
    add: function(framework) {
      frameworks.push(framework)
    }
  }
}
const manager = createFrameworkManager()
console.log(manager) // { print: [Function: print], add: [Function: add] }
manager.print() // [ 'Cypress', 'Playwright' ]
manager.add('Jest')
manager.print() // [ 'Cypress', 'Playwright', 'Jest' ]
