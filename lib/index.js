'use strict';

var Model = require('./Model.js');
var Schema = require('./Schema.js');

var Humongo = function() {
  // Initialize the Humongo Instance Here
}

Humongo.prototype.test = function() {
  return 'Test';
};

Humongo.prototype.Schema = Schema;

var humongo = module.exports = exports = new Humongo;