/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let val = x ^ y;
  let distance = 0;
  while (val) {
    val = val & (val - 1);
    ++distance;
  }
  return distance;
};
