'use strict';

var test = require('tap').test;

var humongo = require('../index');

test('The Generic Humongo Object', function(t) {
  var db = new humongo();
  t.ok(db, 'Humongo Initialized');

  t.test('Humongo Base Functions are Defined', function(initializedTest) {
    initializedTest.plan(5);
    initializedTest.ok(db.newConnection, 'New Connection is defined');
    initializedTest.ok(db.listConnections, 'List of Connections is defined');
    initializedTest.ok(db.addConnection, 'Add Connection is defined');
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

  t.end();
});