'use strict';

exports.registerModel = function(model){
  this.models[model.getName()] = model;
};

exports.listModels = function() {
  return this.models;
}