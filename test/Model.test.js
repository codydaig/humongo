'use strict';

var expect = require('chai').expect;

var Model = require('../lib/Model.js');
var Schema = require('../lib/Schema.js');

describe('Model Tests', function(){
  it('should create a new Model', function(){
    var testSchema = new Schema();
    expect(new Model('test', testSchema)).to.be.an.instanceof(Model);
  });
});