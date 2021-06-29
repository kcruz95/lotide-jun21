const assert = require("chai");
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const cd = { c: "1", d: ["2", 3] };
  it("should return true for (ab, ba)", () => {
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("should return false for (ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
});

// TEST CODE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false