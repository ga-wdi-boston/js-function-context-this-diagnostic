'use strict';

// Study the following code. Then answer the questions that follow.
//
// NOTE: You must answer the first four questions before answering the last
// question. The last question asks you to change this code in a way that
// renders previous answers nonsensical.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1*/ var alderaan = { name: 'Alderaan' };
/*2*/ var deathStar = {
/*3*/   laserQuantity: 1,
/*4*/   laserSize: "huge",
/*5*/   fire: function fire(){
/*6*/     console.log(this);
/*7*/   }
/*8*/ };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laserQuantity`
// on line 3?
//
//     `true` or `false`
//
var q1 = "TRUE. Yes, it would have access to the variable laserQuantity because they are both within the scope of deathStar";
//

// Which scope(s) may access the variable `laserQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
var q2 = "Variables can look out, not in. So, alderaan and global would not have access to laserQuantity, but deathStar and fire would." ;
//

// Which of the following are defined within the scope of the `fire` function?
// Choose one or all of the following:
//
//     `['alderaan', 'chartreuse', 'frickinLasers', 'laserSize']`
//
var q3 = "None of the above are defined in the scope of the fire function, but alderaan and laserSize are accessable by the function.";
//

// Edit line 6 to read `conosole.log(this)`. Insert a line between 7 and 8 that
// invokes `fire`. If we invoked `deathStar` in a browser environment, what
// would the execution context of line 6 be?
//
var q4 = "
{ window: [Circular],
  prompt: [Function],
  console: [Getter/Setter],
  __eval: [Function: eval],
  alderaan: 'Boom',
  deathStar: [Function: deathStar],
  caches: [Getter] }
  "

  "That is a really bad looking answer, so I'll elaborate a little bit. In the method invocation pattern this (not the word this, but the code) points to the object that the method is defined on."
  ;

//

// Edit line 1 to read `var alderaan = { name: 'Alderaan' }`.
//
// Refactor `deathStar` to be an object with properties and methods instead of
// function within a function.
//
// Finally, write the code that would call the `deathStar`'s `fire` method in
// the context of `alderaan`.
//
var q5 = function fireOnAlderaan () {
  deathStar.fire(alderaan);
};
