export const COLOR = '#bababa'

export function compute(a, b) {
  return a + b
}

const privateVar = 42

export default {
  log() {
    console.log(privateVar)
  }
}