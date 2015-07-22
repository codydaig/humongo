'use strict';

var path = require('path');

var Humongo = require(path.resolve('./lib/Humongo.js'));

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Connection Tests', function(){
  var humongo;
  beforeEach(function(){
    humongo = new Humongo();
  });

  it('should create a new connection', function(){
    //expect(new Connection()).to.be.an.instanceof(Connection);
    expect(new humongo.Connection()).to.be.instanceof(humongo.Connection);
  });

});