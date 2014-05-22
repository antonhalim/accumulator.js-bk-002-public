'use strict';

describe('accumulator', function() {

  var accumulator;
  beforeEach(function() {
    accumulator = require('../lib/accumulator');
  });

  it('does a thing', function() {
    expect(accumulator()).toEqual(true);
  });
});
