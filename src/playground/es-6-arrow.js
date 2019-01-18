const add = (a,b) => { 
  return a + b
}

console.log(add(55 ,1, 1001));

const user = {
  name: "Mark",
  cities: ['Reno', 'Wilmington', 'Dover'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived());


const multiplier = {
  numbers: [ 2, 4 ,6 , 8, 25],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number)
  }
}

console.log((multiplier.multiply()));
