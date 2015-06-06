'use strict';

var handleModels = require('./lib/handleModels');
var handleConnections = require('./lib/handleConnections');

var cassandra = require('./drivers/cassandra');

var humongo = function() {
  this.models = {};
  this.connections = {};
};

humongo.prototype.newConnection = handleConnections.newConnection;
humongo.prototype.listConnections = handleConnections.listConnections;
humongo.prototype.addConnection = handleConnections.addConnection;

humongo.prototype.registerModel = handleModels.registerModel;
humongo.prototype.listModels = handleModels.listModels;

humongo.connection = require('./lib/connection');
humongo.model = require('./lib/model');

module.exports = humongo;