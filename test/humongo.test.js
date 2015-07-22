'use strict';

var expect = require('chai').expect;

var humongo = require('../index.js');

describe('Basic Tests', function(){
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

describe('Humongo Tests', function(){
  it('should be able to register a model', function(){
    var testSchema = new humongo.Schema();
    var testmodel = new humongo.Model('test', testSchema);
    humongo.registerModel(testmodel);
    expect(humongo._models['test']).to.equal(testmodel);
  });
})