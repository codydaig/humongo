'use strict';

var expect = require('chai').expect;

var Humongo = require('../index.js');

var Model = Humongo.Model;
var Schema = Humongo.Schema;

describe('Schema Tests', function(){
  var schema; 
  
  beforeEach(function(){
    schema = new Schema();
  });

  it('should pass the basic tests', function(){
    expect(schema.raw()).to.eql({});
  });
});