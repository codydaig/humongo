'use strict';

var path = require('path');

var Humongo = require(path.resolve('./lib/Humongo.js'));

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Basic Tests', function(){
  var humongo;
  beforeEach(function(){
    humongo = new Humongo();
  });

  it('should pass the basic tests', function(){
    expect(1).to.equal(1);
  });

  it('should be able to see Connection', function(){
    expect(new humongo.Connection()).to.be.instanceof(humongo.Connection);
  })

  it('should be able to see Model', function(){
    expect(new humongo.Model()).to.be.instanceof(humongo.Model);
  });

  it('should be able to see Schema', function(){
    expect(new humongo.Schema()).to.be.instanceof(humongo.Schema);
  });
});

describe('Humongo Tests', function(){
  var humongo;
  beforeEach(function(){
    humongo = new Humongo();
  });

  it('should throw an error when trying to access a model that does not exist', function(){
    var testFunc = function(){
      humongo.model('test4');
    };
    assert.throws(testFunc, Error, 'Model does not exist.');
  });

  it('should be able to register a model', function(){
    var testSchema = new humongo.Schema();
    var testmodel = new humongo.Model('test', testSchema);
    humongo.registerModel(testmodel);
    expect(humongo._models['test']).to.equal(testmodel);
  });

  it('should be able to retrieve a registered model', function(){
    var testSchema = new humongo.Schema();
    var testmodel = new humongo.Model('test', testSchema);
    humongo.registerModel(testmodel);
    expect(humongo.model('test')).to.equal(testmodel);
  });

  it('should throw an error when no paramaters are passed to model', function(){
    assert.throws(humongo.model, Error, 'Model requires name to be passed in as a paramater.');
  });

  it('should throw an error when no name is passed to model', function(){
    var testFunc = function(){
      var testSchema = new humongo.Schema();
      humongo.model(testSchema);
    };
    assert.throws(testFunc, Error, 'Model name must be a string!');
  });

  it('should throw an error when a non-string is passed as the name', function(){
    var testFunc = function(){
      var testSchema = new humongo.Schema();
      humongo.model(1, testSchema);
    };
    assert.throws(testFunc, Error, 'Model name must be a string!');
  });

  it('should not matter what order we run the tests in', function(){
    var testFunc = function(){
      humongo.model('test');
    };
    assert.throws(testFunc, Error, 'Model does not exist.');
  });
  
});