class Solution:
    def maxSubArray(self, nums: [int]) -> int:
        result = 0
        _max = nums[0]
        for i in range(len(nums)):
            result += nums[i]
            if result > _max:
                _max = result
            if result < 0:
                result = 0
        return _max
