const assert = require("chai");
const map = require('../map');

describe("#map", () => {
  const words = ["but", "that's", "okay", "because", "this", "is", "a", "seaplane"];
  it("should return [ 'b', 't', 'o', 'b', 't', 'i', 'a', 's' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words, word => word[0]), ['b', 't', 'o', 'b', 't', 'i', 'a', 's']);
  });

  const array1 = [1, 2, 3, 4, 5];
  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, nb => nb * 2'", () => {
    assert.deepEqual(map(array1, nb => nb * 2), [2, 4, 6, 8, 10]);
  });
});

// TEST CODE
// const words = ["but", "that's", "okay", "because", "this", "is", "a", "seaplane"];
// const results1 = map(words, word => word[0]);

// // example 1

// console.log(results1);

// // example 2
// const array1 = [4, 8, 16, 32];
// const map1 = array1.map(x => x / 2);
// console.log(map1);