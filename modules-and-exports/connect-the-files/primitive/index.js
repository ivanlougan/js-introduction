const { check, runTest } = require("../../../../test-api");
// do not change the above line

const mystery = require('???') // enter the correct filepath

runTest("mystery variable is correct greeting", function () {
  check(mystery).isEqualTo("Hello!");
});
