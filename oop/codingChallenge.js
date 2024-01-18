// CODING CHALLENGE #1

const carConstructor = function car(make, speed) {
  this.make = make;
  this.speed = speed;
};

carConstructor.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

carConstructor.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmwCar = new carConstructor("BMW", 120);
const mercedesCar = new carConstructor("Mercedes", 95);

bmwCar.accelerate();
bmwCar.brake();

mercedesCar.accelerate();
mercedesCar.brake();

console.log("----------------------------");

// CODING CHALLENGE #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl("Ford", 120);

console.log(ford.speedUS);
ford.accelerate();
