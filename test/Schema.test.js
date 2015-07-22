'use strict';

var path = require('path');

var expect = require('chai').expect;

var Humongo = require(path.resolve('./lib/Humongo.js'));
var humongo = new Humongo();

var Model = humongo.Model;
var Schema = humongo.Schema;

describe('Schema Tests', function(){
  var schema; 
  
  beforeEach(function(){
    schema = new Schema();
  });

  it('should pass the basic tests', function(){
    expect(schema.raw()).to.eql({});
  });
});