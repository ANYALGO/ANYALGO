class Solution:
    def climbStairs(self, n: int) -> int:
        def loop(n: int, n1: int, n2: int) -> int:
            if n == 1:
                return n1
            if n == 2:
                return n2
            return loop(n - 1, n2, n1 + n2)
        return loop(n, 1, 2)

