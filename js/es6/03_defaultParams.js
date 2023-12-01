// general way
function compute(a, b) {
  return a + b
}
console.log(compute()) // NaN

// with default params
function computeWithDefault(a = 10, b = 20) {
  return a + b
}
console.log(computeWithDefault()) // 30

// more complex example
const getParams = c => c * 2
function computeWithDefaultComplex(a = getParams(2), b = getParams(3)) {
  return a + b
}
console.log(computeWithDefaultComplex()) // 2 * 2 + 3 * 2 = 10
console.log(computeWithDefaultComplex(10)) // 10 + 3 * 2 = 16
