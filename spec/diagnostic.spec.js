'use strict';

const chai = require('chai');
const _ = require('lodash');

const expect = chai.expect;

const diagnostic = require('../lib/diagnostic');


describe('access', function () {
  it('references the correct primitive boolean', () => {
    expect(diagnostic.access).to.be.true;
  });
});

describe('scopes', () => {
  it('is an array containing the correct strings in any order', () => {
    expect(diagnostic.scopes).not.to.eql([]);
    expect(diagnostic.scopes.length).to.eql(2);
    let correct = function (answer) {
      expect(_.includes(['deathStar', 'fire'], answer)).to.be.true;
    };
    diagnostic.scopes.forEach(correct);
  });
});

describe('fireOnAlderaan', () => {
  it('is called on the correct object', () => {
    expect(diagnostic.fireOnAlderaan()).to.eql('Alderaan');
  });
});
