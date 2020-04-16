class Solution:
    def subsets(self, nums: [int]) -> [[int]]:
        print(nums)
        if not nums:
            return [[]]
        result = self.subsets(nums[1:])
        return result + [[nums[0]] + s for s in result]