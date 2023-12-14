// classes are templates for creating objects

// class with ES5 syntax
function Cat (color, name) {
  this.color = color
  this.name = name
}
const cat = new Cat('black', 'Tom')
console.log(cat) // Cat { color: 'black', name: 'Tom' }

// creating our own New
function myNew (constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  return constructor.apply(obj, args) || obj
}
const cat2 = myNew(Cat, 'white', 'Tinki')
console.log(cat2) // Cat { color: 'white', name: 'Tinki' }

// operator new creates instances of classes
const cat3 = new Cat()
console.log(cat3) // Cat { color: undefined, name: undefined }
