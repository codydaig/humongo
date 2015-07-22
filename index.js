'use strict';

/**
 * Require the Humongo Module (The main Module)
 */
var Humongo = require('./lib/Humongo.js');

/**
 * Exports a new instance of the Humongo Module
 * since most users will only need one instance of the main object.
 */
module.exports = new Humongo();