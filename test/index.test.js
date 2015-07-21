'use strict';

var expect = require('chai').expect;

var index = require('../lib/index.js');

describe('Basic Tests', function(){
  it('should pass the basic tests', function(){
    expect(index.test()).to.equal('Test');
  });
});