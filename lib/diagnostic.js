'use strict';

// Study the following code. Then respond to the questions that follow.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1*/ let alderaan = 'Boom';
/*2*/ let deathStar = function deathStar(){
/*3*/   let laserQuantity = 1;
/*4*/   let laserSize = 'huge';
/*5*/   let fire = function fire(){
/*6*/     // some code
/*7*/   };
/*8*/ };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laseQuantity`
// on line 3?
//
//     `true` or `false`
//
let access = true; // replace null with your response
//

// Which scope(s) may access the variable `laswerQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
let scopes = ['deathStar'];

//  None... cause laswerQuantity doesn't exist. Just kidding
// My thoughts, deathStar has the variable laserQuantity so only it can have
// access to it.  In my mind scope is what is invoking a method or variable.
// please correct me if I am wrong.

// Study the following code. Then respond to the questions that follow.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1 */ alderaan = { name: 'Alderaan' };
/*2 */ deathStar = {
/*3 */   fire: function fire(){
/*4 */     return this.name;
/*5 */   }
/*6 */ };

// Write the code that would call the `deathStar`'s `fire` method in the
// context of `alderaan`. In other words, we want to *reference* the `fire`
// method and temporarily bind it (or, change `this`) to `alderaan` before
// executing it.
//
let fireOnAlderaan = function () {
  deathStar.fire.bind(alderaan);
};

// I know the above answer is wrong. I am most likely missing something.

module.exports = {
  access,
  scopes,
  fireOnAlderaan,
};
