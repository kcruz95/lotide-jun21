const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function (string) { //return an obj w/out tallying spaces
  const letterFreq = {};
  for (let letter of string) {
    if (letter.match(/[a-z]/i)) { // if (letter !== " ") {//filtre out any spaces occurring in string
      if (letterFreq[letter]) { //if the letter is counted, add one to the tally
        letterFreq[letter] += 1;
      } else { //if the letter doesn't exist in the letterFreq obj
        letterFreq[letter] = 1;
      }
    }
  } return letterFreq;
};

module.exports = countLetters;