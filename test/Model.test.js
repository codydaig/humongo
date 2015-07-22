'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

var Humongo = require('../lib/Humongo.js');
var humongo = new Humongo();

var Model = humongo.Model;
var Schema = humongo.Schema;

describe('Model Tests', function(){
  it('should create a new Model', function(){
    var testSchema = new Schema();
    expect(new Model('test', testSchema)).to.be.an.instanceof(Model);
  });

  it('should return the model name', function(){
    var testSchema = new Schema();
    var model = new Model('test2', testSchema);
    expect(model.get('name')).to.equal('test2');
  });

  it('should return the model schema', function(){
    var testSchema = new Schema();
    var model = new Model('test2', testSchema);
    expect(model.get('schema')).to.equal(testSchema);
  });
});