// works as prototypes under the hood
class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(this.name + ' says hello!')
  }
}

const human = new Person('Gal')

console.log(human) // Person { name: 'Gal' }
human.greet() // Gal says hello!
console.log(human.__proto__ === Person.prototype) // true


// better way to inherit
class Programmer extends Person {
  constructor(name, job) {
    super(name)
    this._job = job
  }

  get job() {
    return this._job.toUpperCase()
  }

  // useful for validations
  set job(job) {
    if (job.length <= 2) {
      throw new Error('new job has a short value')
    }
    this._job = job
  }
}

const frontend = new Programmer('Joe', 'FE developer')

console.log(frontend) // Programmer { name: 'Joe', _job: 'FE developer' }
console.log(frontend.job)  // FE DEVELOPER
frontend.greet()  // Joe says hello!

frontend.job = 'new job'
console.log(frontend.job) // NEW JOB

// frontend.job = 'a' // Error: new job has a short value


// static methods
// without static method
class Util {
  average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}

const util = new Util()
console.log(util.average(1, 1, 2, 3, 5, 8, 13)) // 4.714285714285714

// with static method
class Util2 {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}

console.log(Util2.average(1, 1, 2, 3, 5, 8, 13, 21)) // 6.75
