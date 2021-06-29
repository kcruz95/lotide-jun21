const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const eqArrays = function(arrOne, arrTwo) {
//   if (arrOne !== arrTwo) {
//     return false;
//   } for (let i = 0; i < arrOne.length; i = i + 1) {
//     if (arrOne[i] !== arrTwo[i]) {
//       return false;
//     }
//   } return true;
// };

// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (eqArray((arrayOne, arrayTwo))) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const middle = function (array) {
  const midInd = Math.floor(array.length / 2);
  let result = [];
  if (array.length <= 2) { // first case if <= 2 indices
    return result;
  }
  if (array.length % 2) { // second case if > 2 indices && odd numbered indices in the array
    result.push(array[midInd]);
  } else { // third case if > 2 indices && even numbered indices in the array
    result.push((array[midInd - 1]), array[midInd]);
  } return result;
};

module.exports = middle;