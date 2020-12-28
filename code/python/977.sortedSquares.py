class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return sorted(list(map(lambda x: x ** 2, A)))

