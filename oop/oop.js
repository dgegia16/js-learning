"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dati = new Person("Dati", 2005);
console.log(dati);

console.log("--------------------------");

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

dati.calcAge();
console.log(dati.__proto__);

Person.prototype.city = "Tbilisi";
console.log(dati);
console.log(dati.hasOwnProperty("city"));
console.log(Person.prototype.constructor);

const arr = [3, 4, 6, 6, 1, 1, 7, 8, 9];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.log("---------------------");

// ES6 Classes

// class expression

// const PersonCl = class {};

// class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl("Jessica", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log("-------------------------------");

// SETTERS AND GETTERS

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log("----------------------------");


