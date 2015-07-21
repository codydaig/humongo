'use strict';

var expect = require('chai').expect;

var humongo = require('../lib/index.js');

describe('Basic Tests', function(){
  it('should pass the basic tests', function(){
    expect(humongo.test()).to.equal('Test');
  });

  it('should be able to see Schema', function(){
    expect(new humongo.Schema()).to.be.instanceof(require('../lib/Schema.js'));
  });
});