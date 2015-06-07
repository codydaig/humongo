'use strict';

exports.registerModel = function(model){
  if(this.models[model.getName()]){
    throw new Error('A model with this name has already been registered');
  }
  this.models[model.getName()] = model;

};

exports.listModels = function() {
  return this.models;
};

exports.getModel = function(name) {
  return this.models[name];
};