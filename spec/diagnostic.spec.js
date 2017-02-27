'use strict';

const chai = require('chai');
const _ = require('lodash');

const expect = chai.expect;

const diagnostic = require('../lib/diagnostic');


describe('answer1', function () {
  it('returns the correct value', () => {
    expect(diagnostic.answer1).to.be.eql(NaN);
  });
});

describe('answer2', () => {
  it('returns the correct value', () => {
    expect(diagnostic.answer2).to.eql("Ben Adamski");
  });
});

describe('answer3', () => {
  it('is called on the correct object', () => {
    expect(diagnostic.answer3).to.eql('Santa Clause');
  });
});

describe('answer4', () => {
  it('is a function that can be called on the correct object', () => {
    expect(diagnostic.answer4()).to.eql('Alderaan');
  });
});
