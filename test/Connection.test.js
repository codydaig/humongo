'use strict';

var path = require('path');

var Humongo = require(path.resolve('./lib/Humongo.js'));

var expect = require('chai').expect;

describe('Connection Tests', function(){
  var humongo;
  beforeEach(function(){
    humongo = new Humongo();
  });

  it('should create a new connection', function(){
    expect(new humongo.Connection()).to.be.instanceof(humongo.Connection);
  });

});