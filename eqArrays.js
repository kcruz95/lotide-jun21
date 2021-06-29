const assertEqual = require('./assertEqual');

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length || arrOne === undefined) {
    return false;
  }
  for (let i = 0;i < arrOne.length;i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      return false;
    }
  }
  if (arrOne[i] !== arrTwo[i]) {
    return false;
  }
  return true;
};

module.exports = eqArrays;