'use strict';

/**
 * The humongo Object
 * @constructor
 */
var Humongo = function() {
  
}

/**
 * Expose the Model Module to the humongo instances
 */
Humongo.prototype.Model = require('./Model.js');

/** 
 * Expose the Schema Module to the humongo instances
 */
Humongo.prototype.Schema = require('./Schema.js');

var humongo = module.exports = exports = new Humongo;