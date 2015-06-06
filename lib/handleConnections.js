'use strict';

var connection = require('./connection.js');

exports.newConnection = function(connectionOptions) {
  var conn = new connection(connectionOptions);
  this.addConnection(conn);
  conn.connect();
  return conn;
};

exports.addConnection = function(conn) {
  this.connections[conn.getName()] = conn;
};

exports.listConnections = function() {
  return this.connections;
};