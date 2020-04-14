/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length;
  candidates.sort((x, y) => x - y);
  const res = [];
  function backtracking(n, list, sum) {
    if (sum === target) {
      res.push(list.slice());
      return;
    }
    if (n === len) {
      return;
    }
    for (let j = n; j < len; j++) {
      if (sum + candidates[j] > target) {
        break;
      }
      list.push(candidates[j]);
      sum += candidates[j];
      backtracking(j, list.slice(), sum);
      sum -= candidates[j];
      list.pop();
    }
  }
  backtracking(0, [], 0);
  return res;
};
