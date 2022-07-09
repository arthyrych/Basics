// closures are just functions inside other functions
function createCalcFunc(n) {
  return function() {
    console.log(1000 * n)
  }
}

const calc = createCalcFunc(42)
calc()

// creating a main function which closures some parameters and returns other function which works with other parameters
function createIncrementor(n) {
  return function(num) {
    return n + num
  }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addTen(15))

// url generator - in main function we set domain and in nested function we set url
function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')

console.log(comUrl('wiki'))
console.log(comUrl('google'))

// own example
function raceGenerator(faction) {
  return function(race) {
    return `${faction}: ${race}`
  }
}

const hordeFaction = raceGenerator('Horde')
const allianceFaction = raceGenerator('Alliance')

const hordeArr = ['Orc', 'Troll', 'Tauren', 'Undead', 'Blood elf']
const allianceArr = ['Human', 'Dwarf', 'Night elf', 'Gnome', 'Draenei']

for (let i = 0; i < hordeArr.length; i++) {
  const element = hordeArr[i];
  console.log(hordeFaction(element))
}

for (let y = 0; y < allianceArr.length; y++) {
  const element = allianceArr[y];
  console.log(allianceFaction(element))
}
