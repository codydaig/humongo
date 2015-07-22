'use strict';

var expect = require('chai').expect;

var Humongo = require('../index.js');

var Model = Humongo.Model;
var Schema = Humongo.Schema;

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
});