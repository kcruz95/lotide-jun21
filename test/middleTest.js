const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});

// TEST CODE

// console.log('first case', middle([2, 4]));
// console.log('second case', middle([2, 8, 6]));
// console.log('third case', middle([2, 34, 67, 18]));

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log('compass <2', middle([1])); // => []
console.log('compass <2', middle([1, 2])); // => []

// For arrays with an odd number of elements, an array containing a single middle element should be returned.
console.log('compass >2 && odd', middle([1, 2, 3])); // => [2]
console.log('compass >2 && odd', middle([1, 2, 3, 4, 5])); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log('compass >2 && even', middle([1, 2, 3, 4])); // => [2, 3]
console.log('compass >2 && even', middle([1, 2, 3, 4, 5, 6])); // => [3, 4]