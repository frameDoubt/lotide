const assert = require('chai').assert;
const tail = require('../tail');

describe("Test for tail() function", () => {
  
  it('returns ["of", "words"] for ["array", "of", "words"]', () => {
    assert.deepEqual(tail(["array", "of", "words"]), ["of", "words"]);
  });

});