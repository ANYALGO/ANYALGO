class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dt = dict()
        for i in range(len(nums)):
            if dt.get(target - nums[i]) is not None:
                return [dt.get(target - nums[i]), i]
            dt[nums[i]] = i
