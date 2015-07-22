'use strict';

var path = require('path');

var expect = require('chai').expect;

var humongo = require(path.resolve('./index.js'));

describe('Index (Initialization) Tests', function(){
  it('should pass the basic tests', function(){
    expect(1).to.equal(1);
  });

  it('should be able to see Schema', function(){
    expect(new humongo.Schema()).to.be.instanceof(humongo.Schema);
  });

  it('should be able to see Model', function(){
    expect(new humongo.Model()).to.be.instanceof(humongo.Model);
  });
});