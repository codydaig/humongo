'use strict';

var handleModels = require('./lib/handleModels');
var handleConnections = require('./lib/handleConnections');

var humongo = function() {
  this.connections = {};
  this.models = {};
};

humongo.prototype.newConnection = handleConnections.newConnection;
humongo.prototype.getConnection = handleConnections.getConnection;
humongo.prototype.listConnections = handleConnections.listConnections;
humongo.prototype.addConnection = handleConnections.addConnection;

humongo.prototype.registerModel = handleModels.registerModel;
humongo.prototype.listModels = handleModels.listModels;
humongo.prototype.getModel = handleModels.getModel;

humongo.connection = require('./lib/connection');
humongo.model = require('./lib/model');

module.exports = humongo;