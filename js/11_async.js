// async operations become available due to event loop concept and call stack realization in js

// 1) callbacks were the initial mechanism for handling async operations
// functions accepted other functions as arguments to be executed upon completion

// 2) promises (ES6) provided a cleaner and more structured approach to handle asynchronous operations
// promises gave a possibility to resolve the callback hell issue

// 3) async/await (ES8) is a syntactic sugar upon promises
// async functions return promises and the `await` keyword is used to pause execution until the promise resolved

const first = function() {console.log('first')}
const second = function() {console.log('second')}
const third = function() {console.log('third')}

first() // call stack => executes
second() // call stack => executes
third() // call stack => executes
// first
// second
// third

first() // call stack => executes
setTimeout(second, 0) // call stack => executes timeout by third-party api => callback queue => call stack => executes
// event loop iterates through callback queue and returns ready operations to the call stack
third() // call stack => executes
// first
// third
// second
