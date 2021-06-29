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

const without = function (source, itemsToRemove) {
  let returnArray = [];
  for (i = 0;i < source.length;i = i + 1) {
    let element = false;
    for (j = 0;j < itemsToRemove.length;j = j + 1) {
      if (source[1] === itemsToRemove[j]) {
        element = true;
      }
    } if (element === false) {
      returnArray.push(source[i]);
    }
  } return returnArray;
}

module.exports = assertArraysEqual;
module.exports = eqArrays;