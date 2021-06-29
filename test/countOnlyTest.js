const assert = require("chai");
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should return { 'Jason': 1, 'Fang': 2 }", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Jason": 1, "Fang": 2 });
  });
});

// TEST CODE
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {
//   "Jason": true,
//   "Karima": true,
//   "Fang": true,
//   "Agouhanna": false
// });

// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));
// console.log(assertEqual(result1["Agouhanna"], undefined));