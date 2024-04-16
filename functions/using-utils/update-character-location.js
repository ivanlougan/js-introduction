const { check, runTest } = require("../../test-api/index.js");

function updateCharacterLocation() {
  // make use of the util functions createLookupObject in section 3 and updatePosition in section 2.
}

runTest(
  "createArrow() will return an arrow pointing in the right direction",
  function () {
    check(updateCharacterLocation("a", [1, 3])).isEqualTo([0, 3]);
    check(updateCharacterLocation("aw", [5, 2])).isEqualTo([4, 3]);
    check(updateCharacterLocation("awsddsws", [0, 0])).isEqualTo([1, -1]);
  }
);
