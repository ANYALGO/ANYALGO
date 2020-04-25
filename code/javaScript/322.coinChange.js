/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
  let ans = [0];
  for (let i = 1; i <= amount; i++) {
    ans[i] = amount + 1;
  }
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        ans[i] = Math.min(ans[i], ans[i - coin] + 1);
      }
    }
  }
  return ans[amount] > amount ? -1 : ans[amount];
};
