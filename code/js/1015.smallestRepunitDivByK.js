/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0 || k % 5 === 0) {
    return -1;
  }
  let n = 0;
  let c = 1;
  while (true) {
    n = (n * 10 + 1) % k;
    if (n === 0) {
      return c;
    }
    c += 1;
  }
};
