'use strict';

// Question 1

let num1 = 1;
let num2 = 2;

const add = function(num1, num2) {
  num1 = num1 + num2;
  return num1;
};

add();

// Question 1:  What is the return value of `add();`?
let answer1 = NaN; // replace null with your response

// Question 2

let person = {
  firstName: "Ben",
  lastName: "Adamski",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
};

person.fullName();

// Question 2:  What returns when we call person.fullName();
let answer2 = 'Ben Adamski'; // replace null with your response

// Question 3

let person1 = {
  firstName: "Ben",
  lastName: "Adamski",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let person2 = {
  firstName: "Santa",
  lastName: "Clause"
};

// Question 3:  Invoke the `fullName()` method so it returns `Santa Clause`?
let answer3 = {
  fullname: function() {
    return person2.firstName + " " + person2.lastName;
  }
}; // replace null with your response

// Question 4

let alderaan = {
  name: 'Alderaan'
};
let deathStar = {
  fire: function() {
    return this.name;
  }
};

// Question 4: Write the code that would set the `deathStar`'s `fire` method
// in the context of `alderaan` but does not invoke the method,
// so that we could call answer4() // Alderaan
let answer4 = function() {
  if (deathStar !== alderaan) {
    console.log('Alderaan');
  }
}; // replace null with your response

module.exports = {
  answer1,
  answer2,
  answer3,
  answer4
};
