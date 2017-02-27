'use strict';

// Question 1

let num1 = 1;
let num2 = 2;

const add = function(num1, num2){
  num1 = num1 + num2;
  return num1;
};

add();

// Question 1:  What is the return value of `add();`?
let answer1 = 3; // replace null with your response

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
let answer2 = Ben Adamski; // replace null with your response

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
let answer3 = person1.fullName().call(person2); // replace null with your response
//person2 wants the method only defined by person1 so we need to bind that method to person2
//"this" will refer to the content of person2 with the "call" bind, but I think my syntax might be off.

// Question 4

let alderaan = { name: 'Alderaan' };
let deathStar = {
  fire: function() {
    return this.name;
   }
};

// Question 4: Write the code that would set the `deathStar`'s `fire` method
// in the context of `alderaan` but does not invoke the method,
// so that we could call answer4() // Alderaan
let answer4 = deathStar.fire.bind('alderaan');  // replace null with your response
// I think this is another case of hard binding. The situation seems very similair to question 3.
// We have 2 object and need to apply one method to the other, but I think we want to use bind since we don't want to invoke the method. I am not confident about this one.

module.exports = {
  answer1,
  answer2,
  answer3,
  answer4
};
