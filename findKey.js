const assertEqual = require('./assertEqual');

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }

  let(callback = findKey("noma"));
  if (callback) {
    console.log(`${findKey} found!`)
  } else {
    console.log(undefined);
  }
};
// console.log(callback);

module.exports = findKey;