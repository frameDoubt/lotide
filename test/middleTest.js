const assert = require('chai').assert;
const middle = require('../middle');

describe("Test for middle() function", () => {
  
  it('returns middle index of [1, 5, 7, 9, 11] an array with an odd number of values', () => {
    assert.deepEqual(middle([1, 5, 7, 9, 11]), [7]);
  });

  it('returns middle indexes of [1, 5, 7, 9, 11, 18] an array with an even number of values', () => {
    assert.deepEqual(middle([1, 5, 7, 9, 11, 18]), [7, 9]);
  });

  it('returns an empty array because there is no middle index for [1, 11] an array two values', () => {
    assert.deepEqual(middle([1, 11]), []);
  });

  it('returns an empty array because one is the lonliest number', () => {
    assert.deepEqual(middle([1]), []);
  });
});