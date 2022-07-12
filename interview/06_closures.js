// closures give an access to a function to variables from the outer scope (function inside function)

function sayHelloTo(name) {
  const message = 'Hello ' + name
  return function() {
    console.log(message)
  }
}

const helloToJoe = sayHelloTo('Joe')
console.log(helloToJoe) // Hello Joe
console.log(helloToJoe()) // undefined

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
