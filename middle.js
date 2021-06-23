const eqArrays = function(arrOne, arrTwo) {
  if (arrOne !== arrTwo) {
    return false;
  } for (let i = 0; i < arrOne.length; i = i + 1) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArray((arrayOne, arrayTwo))) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const midInd = Math.floor(array.length / 2);
  let result = [];
  if (array.length <= 2) { // first case if <= 2 indices
    return result;
  }
  if (array.length % 2) { // second case if > 2 indices && even numbered indices in the array
    result.push(array[midInd]);
  } else { // third case if > 2 indices && odd numbered indices in the array
    result.push((array[midInd - 1]), array[midInd]);
  } return result;
};

console.log('first case', middle([2, 4]));
console.log('second case', middle([2, 8, 6]));
console.log('third case', middle([2, 34, 67, 18]));

// TEST CODE

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log('compass <2', middle([1])); // => []
console.log('compass <2', middle([1, 2])); // => []

// For arrays with an odd number of elements, an array containing a single middle element should be returned.
console.log('compass >2 && odd', middle([1, 2, 3])); // => [2]
console.log('compass >2 && odd', middle([1, 2, 3, 4, 5])); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log('compass >2 && even', middle([1, 2, 3, 4])); // => [2, 3]
console.log('compass >2 && even', middle([1, 2, 3, 4, 5, 6])); // => [3, 4]