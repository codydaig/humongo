'use strict';

/**
 * The humongo Object
 * @constructor
 */
var Humongo = function() {
  this._models = {};
};

/**
 * Register a Model
 * @param {Model} model - An instance of Model
 *
 * Takes the Model and adds it to the _models array with the model name as the key
 */
Humongo.prototype.registerModel = function(model) {
  return this._models[model.get('name')] = model;
};

/**
 * Expose the Model Module to the humongo instances
 */
Humongo.prototype.Model = require('./Model.js');

/** 
 * Expose the Schema Module to the humongo instances
 */
Humongo.prototype.Schema = require('./Schema.js');

/**
 * Export a new instance of Humongo that's ready to use!
 */
var humongo = module.exports = exports = new Humongo;