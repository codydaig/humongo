'use strict';

var cassandra = require('cassandra-driver');

module.exports = function(connection) {

  
  
  // Connect to the Cassandra Client
  connection.prototype.connect = function() {
    var _this = this;

    this.client = new cassandra.Client({
      contactPoints: this.hosts
      //keyspace: this.database
    });
    this.client.connect(function(err, result){
      _this.initDB(_this.database);
    });
  };

  connection.prototype.initDB = function(name) {
    var dbname;
    if(!name || name === '') {
      dbname = this.database;
    } else {
      dbname = name;
    }
    this.query("CREATE KEYSPACE IF NOT EXISTS " + dbname + " WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };", function(err){
      if(err) {
        throw new Error('Error occured while ensuring Keyspace was created');
      } else {
        console.log("Executed.");
      }
    });
  };

  connection.prototype.initTable = function(schema) {
    if(!name || name === '') {
      throw new Error('No Table Name was Defined');
    }
    //this.query("CREATE TABLE IF NOT EXISTS " + name + " ")
  }

  connection.prototype.query = function(q, callback) {
    this.client.execute(q, callback);
  };

  connection.prototype.close = function() {
    this.client.shutdown();
  };

};