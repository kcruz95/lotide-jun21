const assert = require("chai");
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("should return [4, 10] for o in 'hello hello'", () => {
    assert.deepEqual(letterPositions("hello hello").o, [4, 10]);
  });
});

// TEST CODE

// assertArraysEqual(eqArrays(letterPositions("hello").h, [0]), true);
// assertArraysEqual(eqArrays(letterPositions("hello").e, [1]), true);
// assertArraysEqual(eqArrays(letterPositions("hello").l, [2, 3]), true);
// assertArraysEqual(eqArrays(letterPositions("hello").o, [4]), true);