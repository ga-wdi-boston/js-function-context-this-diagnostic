'use strict';

// Study the following code. Then respond to the questions that follow.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.
'use strict';

 let alderaan = 'Boom';
 console.log(laserQuantity)
 let deathStar = function deathStar(){
   console.log('fire!!!');
   console.log(alderaan);
   let laserQuantity = 1;
   console.log(alderaan);
   let laserSize = 'huge';
   let fire = function fire(){
     console.log(laserQuantity);
   };
   fire();
   let ice = function ice(){
     console.log(laserQuantity);
   };
   ice();
 };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laserQuantity`
// on line 3?
//
//     `true` or `false`
//
let access = true; // replace null with your response
//

// Which scope(s) may access the variable `laserQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
let scopes = ['deathStar', 'fire',];
//

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
  // your code here
};



module.exports = {
  access,
  scopes,
  fireOnAlderaan,
};
