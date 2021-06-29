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

const letterPositions = function (sentence) {
  const count = {};
  for (let i = 0;i < sentence.length;i++) {
    console.log(sentence[i]);
    if (sentence[i] !== " ") {
      console.log(count[sentence[i]]);
      if (count[sentence[i]] === undefined) {
        count[sentence[i]] = [i];
      } else {
        count[sentence[i]].push(i);
      }
    }
  }
  console.log(count);
};

letterPositions("lighthouse in the house");

module.exports = assertArraysEqual;
module.exports = eqArrays;
