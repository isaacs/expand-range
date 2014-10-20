'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: true,
  fixtures: 'fixtures/expand*.js',
  add: 'libs/*.js',
  cwd: __dirname
});

suite.run();
