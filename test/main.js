'use strict';

require('./setup.js');

var test = require('tap').test;

var humongo = require('../index');

test('The Generic Humongo Object', function(t) {
  var db = new humongo();
  t.ok(db, 'Humongo Initialized');

  t.test('Humongo Base Functions are Defined', function(initializedTest) {
    initializedTest.plan(6);
    initializedTest.ok(db.newConnection, 'New Connection is defined');
    initializedTest.ok(db.listConnections, 'List of Connections is defined');
    initializedTest.ok(db.addConnection, 'Add Connection is defined');
    initializedTest.ok(db.getConnection, 'Get Connection is defined');
    initializedTest.ok(db.registerModel, 'Register Model is defined');
    initializedTest.ok(db.listModels, 'List of Models is defined');
  });

  t.test('Humongo Base Variables are Defined', function(initializedTest) {
    initializedTest.plan(2);
    initializedTest.ok(db.models, 'Models should be defined');
    initializedTest.ok(db.connections, 'Connections should be defined');
  });

  t.test('Humongo Base Variables are the correct type', function(initializedTest) {
    initializedTest.plan(2);
    initializedTest.type(db.models, 'object', 'db.Models should be an Object');
    initializedTest.type(db.connections, 'object', 'db.connections should be an object');
  });

  t.test('Ensure Humongo Base variables are empty', function(initializedTest) {
    initializedTest.plan(2);
    initializedTest.strictSame(db.listConnections(), {}, 'The list of Connections should be empty');
    initializedTest.strictSame(db.listModels(), {}, 'The list of Models should be empty');
  });

  t.test('Test Cassandra Driver', function(driverTest) {
    var connectionOptions = {
      name: 'cassandra1',
      driver: 'cassandra-driver',
      hosts: ['127.0.0.1'],
      database: 'testdb'
    };
    var connection = db.newConnection(connectionOptions);
    driverTest.ok(connection, 'Should Create new Connection without an Error');
    driverTest.type(db.listConnections(), 'object', 'db.connections should still return an object');
    driverTest.countObjectKeys(db.listConnections(), 1, 'db.connections should only have 1 item');
    driverTest.strictSame(db.getConnection(connectionOptions.name), connection, 'The connections should be the same object');

    var connectionOptions2 = {
      name: 'cassandra2',
      driver: 'cassandra-driver',
      hosts: ['127.0.0.1'],
      database: 'testdb'
    };
    driverTest.strictNotSame(db.getConnection(connectionOptions.name), db.newConnection(connectionOptions2), 'Should not be the same');
    driverTest.countObjectKeys(db.listConnections(), 2, 'db.connections should only have 2 items');

    driverTest.end();
  });

  t.test('Test Models', function(modelTest) {
    var model1 = new humongo.model('model1', {'name': {type: 'String', required: 'Name is required'}}, {});
    modelTest.ok(model1, 'The new Model should not Error out');
    db.registerModel(model1);
    modelTest.countObjectKeys(db.listModels(), 1, 'db.models should only have 1 item');
    modelTest.strictSame(db.getModel('model1'), model1, 'Models should be identical');
    modelTest.strictSame(model1.getName(), 'model1', 'Model name should be equal');

    modelTest.end();
  });

  t.end();
});