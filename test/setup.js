'use strict';

var tap = require('tap');
var _ = require('underscore');

tap.Test.prototype.addAssert('countObjectKeys', 2, function(object, shouldHave, message, extra) {
  message = message || 'Should have ' + shouldHave + ' keys';

  var has = _.allKeys(object).length;

  return this.equal(shouldHave, has, message, extra);
});