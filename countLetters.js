const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE
console.log(countLetters('lighthouse in the house'));

/* EXPECTED OUTPUT
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
 */