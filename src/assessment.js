'use strict';

// Study the following code. Then answer the questions that follow.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1*/ var alderaan = "Boom";
/*2*/ var deathStar = function deathStar(){
/*3*/   var laserQuantity = 1;
/*4*/   var laserSize = "huge";
/*5*/   var fire = function fire(){
/*6*/     // some code
/*7*/   };
/*8*/ };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laseQuantity`
// on line 3?
//
//     `true` or `false`
//
var q1 = false;
//

// Which scope(s) may access the variable `laswerQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
var q2 = ['fire', 'deathStar'];
//

// Study the following code. Then answer the questions that follow.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1*/ var alderaan = { name: 'Alderaan' };
/*2*/ var deathStar = {
/*3*/   laserQuantity: 1,
/*4*/   laserSize: 'huge',
/*5*/   fire: function fire(){
/*6*/     // some code
/*7*/   }
/*8*/ };

// Write the code that would call the `deathStar`'s `fire` method in the
// context of `alderaan`. In other words, we want to *reference* the `fire`
// method and temporarily bind it (or, change `this`) to `alderaan` before
// executing it.


//
var q5 = function fireOnAlderaan () {
  alderaan.fire.bind(alderaan)
};

fireOnAlderaan();

//probably not. 
