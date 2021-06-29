const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

const takeUntil = function (array, callback) {
  let results = [];
  for (let i = 0;i < array.length;i = i + 1) {
    // console.log(element);
    if (callback(array[i])) {
      break;
    } else {
      results.push(array[i]);
    }
  }
  return results;
}

module.exports = assertArraysEqual;
module.exports = eqArrays;