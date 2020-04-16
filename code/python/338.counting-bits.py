class Solution:
    def countBits(self, num: int) -> [int]:
        return [bin(i).count("1") for i in range(num + 1)]

