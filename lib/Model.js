'use strict';

var Model = function(name, schema) {
  this._name = name;
  this._schema = schema;
};

Model.prototype.name = function() {
  return this._name;
};

module.exports = Model;