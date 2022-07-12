// there are global, block and function (local) scope
// variables in global scope are available inside the block or local scope
// variables in block or local scope are not available outside

function funcA() {
  let a = 1
  function funcB() {
    let b = 2
    function funcC() {
      let c = 3
      console.log('funcC', a, b, c) // funcC 1 2 3
    }
    funcC()
    console.log('funcB', a, b) // , c) // ReferenceError: c is not defined
  }
  funcB()
  console.log('funcA', a) // , b, c) // ReferenceError: b is not defined // ReferenceError: c is not defined
}

funcA()
