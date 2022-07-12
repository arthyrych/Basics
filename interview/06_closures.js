// closure gives you access to an outer function's scope from an inner function (function inside function)
// we have no direct access to the enclosed variable

// variable message is enclosed and we have no direct access to it except through log method used by inner function
function sayHelloTo(name) {
  const message = 'Hello ' + name
  return function() {
    console.log(message)
  }
}

const helloToJoe = sayHelloTo('Joe')
console.log(helloToJoe) // Hello Joe
console.log(helloToJoe()) // undefined


// variable fw is enclosed and we have no direct access to it except through the object's methods
function createFrameworkManager() {
  const fw = ['Cypress', 'Playwright']
  return {
    print: function() {
      console.log(fw)
    },
    add: function(framework) {
      fw.push(framework)
    }
  }
}

const manager = createFrameworkManager()
console.log(manager) // { print: [Function: print], add: [Function: add] }
manager.print() // [ 'Cypress', 'Playwright' ]
manager.add('Jest')
manager.print() // [ 'Cypress', 'Playwright', 'Jest' ]
