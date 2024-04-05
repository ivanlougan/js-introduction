const { check, runTest } = require("../../test-api/index.js");

function capitaliseNameOfDepartment() {
  // make use of the util function capitaliseFirstLetter in section 1
}

runTest(
  "createArrow() will return an arrow pointing in the right direction",
  function () {
    check(capitaliseNameOfDepartment("onboarding")).isEqualTo("Onboarding");
    check(capitaliseNameOfDepartment("human resources")).isEqualTo("Human Resources");
    check(capitaliseNameOfDepartment("department for preservation of wild berries along riverbanks")).isEqualTo("Department For Preservation Of Wild Berries Along Riverbanks");
  }
);
