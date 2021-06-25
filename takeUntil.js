const eqArrays = function (arrOne, arrTwo) {
  if (arrOne !== arrTwo) {
    return false;
  } for (let i = 0; i < arrOne.length; i = i + 1) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArray((arrayOne, arrayTwo))) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function (array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i = i + 1) {
    // console.log(element);
    if (callback(array[i])) {
      break;
    } else {
      results.push(array[i]);
    }
  }
  return results;
}

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);