class Solution:
    def smallerNumbersThanCurrent(self, nums):
        copy_nums = nums[:]
        found = dict()
        for i in range(len(nums)):
            if not nums[i] in found.keys():
                less_than = len(list(filter(lambda x: x < nums[i], copy_nums)))
                found[nums[i]] = less_than
            nums[i] = found[nums[i]]
        return nums