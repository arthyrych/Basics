// async subsequence example with callbacks (bad way since we have deep nesting with callbacks inside callbacks)
console.log('request data...')

// setTimeout(() => {
//   console.log('preparing data...')

//   const beData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     beData.modified = true
//     console.log('data received:', beData)
//   }, 2000)
// }, 2000)


// async example with promises
// resolve function is called once the async operation is completed successfully
// reject function is called once the async operation is failed
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('preparing data...')

    const beData2 = {
      server: 'azure',
      port: 8000,
      status: 'working'
    }

    resolve(beData2)
  }, 2000)
})

// then method executes its callback once resolve() is completed, tells what should be done once the promise resolved
p.then(data => {
  // const p2 = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
      // reject(data)
    }, 2000)
  })

  // p2.then(modifiedData => {
  //   console.log('data received:', modifiedData)
  // })
}).then(modifiedData => {
  console.log('data received:', modifiedData)
// catch method executes its callback once reject() is completed
}).catch(err => {
  console.log('error:', err)
// finally method executes its callback in any case (once then or catch is completed)
}).finally(() => {
  console.log('finally')
})


// additional example (improving setTimeout function)
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(5000).then(() => console.log('after 5 sec'))
sleep(6000).then(() => console.log('after 6 sec'))
sleep(7000).then(() => console.log('after 7 sec'))

// method all executes its callback once all promises in the array are executed
Promise.all([sleep(8000), sleep(9000)]).then(() => {
  console.log('after all promises')
})

// method race executes its callback once the fastest promise in the array is executed
Promise.race([sleep(10000), sleep(11000)]).then(() => {
  console.log('after race promise')
})
