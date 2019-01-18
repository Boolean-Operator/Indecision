console.log('es6-classes-1.js');

class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, my name is ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += `  Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHomeLocation() {
    return !!this.homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.hasHomeLocation()) {
      greeting += `  I am visiting from ${this.homeLocation}`
    }
    return greeting
  }

}

const me = new Student('Mark Graybill', 52, "Resort Management");
console.log(me.getGreeting());
console.log(me.getDescription());

const bill = new Traveler('William Gates', 85, "Silicon Valley, CA");
console.log(bill.getGreeting());
console.log(bill.getDescription());

const other = new Traveler(undefined, 26)
console.log(other.getGreeting());
console.log(other.getDescription());
