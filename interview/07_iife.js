// immediately invoked function expression
// functions in () and invoked immediately

// issue
let result = []
for(var i = 0; i < 5; i++) {
  result.push(function() {
    console.log(i)
  })
}

result[1]() // 5
result[2]() // 5
result[3]() // 5


// fixed with iife
let result2 = []
for(var i = 0; i < 5; i++) {
  (function() {
    var j = i
    result2.push(function() {
      console.log(j)
    })
  })()
}

result2[1]() // 1
result2[2]() // 2
result2[3]() // 3
