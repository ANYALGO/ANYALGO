from typing import List


class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        if not cardPoints:
            return 0
        if len(cardPoints) <= k:
            return sum(cardPoints)
        n = len(cardPoints)
        left = 0
        right = n - k - 1
        m = sum(cardPoints[left:right + 1])
        s = m
        while right < n - 1:
            right += 1
            s = s - cardPoints[left] + cardPoints[right]
            left += 1
            m = min(m, s)
        return sum(cardPoints) - m


if __name__ == "__main__":
    s = Solution()
    print(s.maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3))
