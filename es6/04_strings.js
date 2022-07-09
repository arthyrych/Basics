// old '' and ""
// new ``
// possibility to pass variables and functions into a string
// the formatting (spaces, tabs, new lines) is also saved
// can include '' and "" without conflicts

const title = 'Hello'
const isVisible = () => Math.random() > 0.5
const template = `
p tag here: ${isVisible() ? `<p>Visible</p>` : ''}
  <h1 id='demo' style="color: red">${title}</h1>
`
console.log(template)

// new string methods
const str = ' Hello '

console.log(str.startsWith('He')) // true
console.log(str.startsWith('e')) // false

console.log(str.endsWith('lo')) // true
console.log(str.endsWith('l')) // false

console.log(str.includes('llo')) // true
console.log(str.includes('lyo')) // false

console.log(str.repeat(3)) // Hello  Hello  Hello

// removes the leading and trailing white space and line terminator characters from a string
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

console.log(str.padStart(10, '-')) // --- Hello
console.log(str.padEnd(8, 'abc')) //  Hello a