'use strict';

let _ = require('lodash');
let diagnostic = require('../lib/diagnostic');

describe('access', () => {
  it('references the correct primitive boolean', () => {
    expect(diagnostic.access).toBe(true);
  });
});

describe('scopes', () => {
  it('is an array containing the correct strings in any order', () => {
    let correct = function (answer) {
      expect(_.includes(['deathStar', 'fire'], answer)).toBe(true);
    };
    diagnostic.scopes.forEach(correct);
  });
});

describe('fireOnAlderaan', () => {
  it('is called on the correct object', () => {
    expect(diagnostic.fireOnAlderaan()).toBe('Alderaan');
  });
});
