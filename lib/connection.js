'use strict';

var func = require('./connectionFunctions');

var connection = function(options) {
  this.name = options.name;
  this.driver = options.driver;
  this.hosts = options.hosts;
  this.database = options.database;

  require('./drivers/' + this.driver + '.js')(connection);
};

connection.prototype.getName = func.getName;

module.exports = connection;