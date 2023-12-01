// interpretator runs line by line, pushes commands to the call stack and runs them immediately
console.log('Start') // call stack > runs immediately
console.log('Start 2') // call stack > runs immediately

function t2s() {
  console.log('timeout 2 sec')
}

function t0s() {
  console.log('timeout 0 sec')
}

// async operations go to
// call stack > engine api > callback queue (event loop iterates, returns functions to call stack) > call stack > runs
setTimeout(t2s, 2000) // call stack > executes by engine api > callback queue > call stack > runs
setTimeout(t2s, 2000) // call stack > executes by engine api > callback queue > call stack > runs
setTimeout(t0s, 0) // call stack > executes by engine api faster than t2s > callback queue > call stack > runs
// event loop just returns ready functions from callback queue back to call stack where they runs

console.log('End') // call stack > runs immediately

// all events (click, dbclick, hover, scroll etc) works on event loop concept