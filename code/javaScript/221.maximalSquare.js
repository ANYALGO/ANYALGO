/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = new Array(rows + 1).fill(new Array(cols + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max ** 2;
};

maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);
