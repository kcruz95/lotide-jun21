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
