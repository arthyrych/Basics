// async operations become available due to event loop concept and call stack realization in js

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
