# HUMONGO

[![Build Status](https://travis-ci.org/codydaig/humongo.svg?branch=master)](https://travis-ci.org/codydaig/humongo) [![Coverage Status](https://coveralls.io/repos/codydaig/humongo/badge.svg)](https://coveralls.io/r/codydaig/humongo) [![Dependencies](https://david-dm.org/codydaig/humongo.svg)]

### Installation
```
npm install humongo
```

### Basic Usage
```
var humongo = require('humongo');

var db = new humongo();
db.newConnection(connectionOptions);