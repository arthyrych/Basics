// symbol - unique primitive, often used as object keys to avoid name collisions
const id = Symbol('id')
const id2 = Symbol('id')
console.log(id === id2) // false - every symbol is unique
const user = {[id]: 42}
console.log(user[id]) // 42
console.log(Object.keys(user)) // [] - symbol keys are hidden from keys/entries/for..in
