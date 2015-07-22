'use strict';

/**
 * Represents a Model
 * @constructor
 * @param {string} name - The Name of the Model
 * @param {Schema} schema - The schema of the model, must be a schema instance
 */
var Model = function(name, schema) {
  this._name = name;
  this._schema = schema;
};

Model.prototype.name = function() {
  return this._name;
};

module.exports = Model;