'use strict';

var func = require('./modelFunctions.js');

var model = function(name, schema, options) {
  this.name = name;
  this.schema = schema;
  this.options = options;
};

model.prototype = {
  getName: func.getName
}

module.exports = model;