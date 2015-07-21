'use strict';

var expect = require('chai').expect;

var Schema = require('../lib/Schema.js');

describe('Schema Tests', function(){
  var schema; 
  
  beforeEach(function(){
    schema = new Schema();
  });

  it('should pass the basic tests', function(){
    expect(schema.raw()).to.eql({});
  });
});