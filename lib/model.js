'use strict';

var func = require('./modelFunctions.js');

var model = function(name, connection, schema, options) {
  if(!name || name === '') {
    throw new Error('Name must be defined');
  } 
  this.name = name;

  if(!connection) {
    throw new Error('Connection must be defined');
  }
  this.connection = connection;
  
  this.schema = schema;
  this.options = options;
};

model.prototype = {
  getName: func.getName
}

module.exports = model;