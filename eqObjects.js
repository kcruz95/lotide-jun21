const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
  if (arrOne !== arrTwo) {
    return false;
  } for (let i = 0; i < arrOne.length; i = i + 1) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); // return an array of object1's keys
  const keys2 = Object.keys(object2); // return an array of object2's keys

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const key1 = object1[key]; // key1 is the element of keys1
    const key2 = object2[key]; // key2 is the element of keys2

    if (Array.isArray(key1)) {
      if (!eqArrays(key1, key2)) { //if key1 !== key2 according to eqArrays
        return false;
      }
      continue;
    }
    if (key1 === key2) {
      return true;
    }
  }
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false