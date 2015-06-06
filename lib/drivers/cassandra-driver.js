'use strict';

var cassandra = require('cassandra-driver');

module.exports = function(connection) {
  
  // Connect to the Cassandra Client
  connection.prototype.connect = function() {
    this.client = new cassandra.Client({
      contactPoints: this.hosts,
      keyspace: this.database
    });
  };

};