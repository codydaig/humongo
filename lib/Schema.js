'use strict';

var Schema = function(){
  this.obj = {};
};

Schema.prototype.raw = function() {
  return this.obj;
};

module.exports = Schema;