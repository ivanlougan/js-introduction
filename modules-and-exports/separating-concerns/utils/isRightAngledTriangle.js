function isRightAngledTriangle(sideA, sideB, sideC) {
  const sqrtSide = require("../utils/mathFunctions")
  const sideASquared = sqrtSide.squareNumber(sideA);
  const sideBSquared = sqrtSide.squareNumber(sideB);
  const sideCSquared = sqrtSide.squareNumber(sideC);

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
