/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let res = [];
  let stack = [];
  let index = -1;
  for (let i = T.length - 1; i >= 0; i--) {
    while (index >= 0 && T[stack[index]] <= T[i]) {
      index--;
    }
    if (index >= 0) {
      res[i] = stack[index] - i;
    } else {
      res[i] = 0;
    }
    index++;
    stack[index] = i;
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
