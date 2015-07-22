'use strict';

/**
 * Represents a Model
 * @constructor
 * @param {string} name - The Name of the Model
 * @param {Schema} schema - The schema of the model, must be a schema instance
 */
var Model = function(name, schema) {
  this.name = name;
  this.schema = schema;
};

/**
 * The getter for the Model
 @param {string} key - The key to the value needed.
 */
Model.prototype.get = function(key) {
  return this[key];
};

module.exports = Model;