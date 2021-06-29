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

const map = function (array, callback) { // array to map && callback

  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item)
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}

module.exports = assertArraysEqual;
module.exports = eqArrays;
