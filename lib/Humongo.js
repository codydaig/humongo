'use strict';

/**
 * The humongo Object
 * @constructor
 */
var Humongo = function() {
  this._connections = {};
  this._models = {};
};

/**
 * If model isn't defined yet, it register's the model.
 * Then it returns the model to be used.
 */
Humongo.prototype.model = function(name, schema){
  if(!name) {
    throw new Error('Model requires name to be passed in as a paramater.');
  } else if (typeof name !== 'string') {
    throw new Error('Model name must be a string!');
  }
  if(schema) {
    this.registerModel(new humongo.Model(name, schema));
  }
  if(!this._models[name]) {
    throw new Error('Model does not exist.');
  }
  return this._models[name];
}

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
 * Expose the Connection Module to the humongo instances
 */
Humongo.prototype.Connection = require('./Connection.js');

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
//var humongo = module.exports = exports = new Humongo;
module.exports = Humongo;
