import math


class Solution:
    def numSquares(self, n: int) -> int:
        dp = [i for i in range(2 * n + 1)]
        for i in range(n + 1):
            for j in range(1, i):
                if i - j ** 2 >= 0:
                    dp[i] = min(dp[i], dp[i - j ** 2] + 1)
                else:
                    break
        return dp[n]
