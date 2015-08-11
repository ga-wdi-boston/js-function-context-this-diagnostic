'use strict';

// Study the following code. Then answer the questions that follow.
//
//  You must answer the first four questions before answer the last
// question. The last question asks you to change this code in a way that
// renders previous answers nonsensical.
//
//  Line numbers are annotated line numbers, not editor line numbers.

/*1*/ var alderaan = { name: "Alderaan" };
/*2*/ var DeathStar = function() {
/*3*/   var laserQuantity = 1;
/*4*/   var laserSize = "huge";
/*5*/   this.fire = function() {
/*6*/     console.log(this);
/*7*/   };
/*8*/ };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laserQuantity`
// on line 3?
//
//     `true` or `false`
//
var q1 = true;
//

// Which scope(s) may access the variable `laswerQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
var q2 = ['deathStar', 'fire'];
//

// Which of the following are defined within the scope of the `fire` function?
// Choose one or all of the following:
//
//     `['alderaan', 'chartreuse', 'frickinLasers', 'laserSize']`
//
var q3 = ['laserSize'];
//

// Edit line 6 to read `conosole.log(this)`. Insert a line between 7 and 8 that
// invokes `fire`. If we invoked `deathStar` in a browser environment, what
// would the execution context of line 6 be?
//
var q4 = 'window';
//

// Edit line 1 to read `var alderaan = { name: 'Alderaan' }`.
//
// Refactor `deathStar` to be an object with properties and methods instead of
// function within a function.
//
// Finally, write the code that would call the `deathStar`'s `fire` method in
// the context of `alderaan`.
//
var q5 = function fireOnAlderaan (target) {
	new DeathStar().fire.call(target);
};

q5(alderaan);

// Comfort: 5
// Clarity: 3
