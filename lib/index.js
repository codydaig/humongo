'use strict';

var Humongo = function() {
  // Initialize the Humongo Instance Here
}

Humongo.prototype.test = function() {
  return 'Test';
};

Humongo.prototype.Model = require('./Model.js');

Humongo.prototype.Schema = require('./Schema.js');

var humongo = module.exports = exports = new Humongo;