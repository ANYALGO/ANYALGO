class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        board = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if i or j:
                    board[i][j] = board[i - 1][j] + board[i][j - 1]
                else:
                    board[i][j] = 1
        return board[-1][-1]
