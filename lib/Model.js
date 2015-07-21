'use strict';

var Model = function(name, schema) {
  this.name = name;
  this.schema = schema;
};

Model.prototype.name = function(){
  return this.name;
};

module.exports = Model;