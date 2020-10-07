class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return -1
        left, right = 0, len(nums)-1
        while left < right:
            mid = left + (right - left) // 2
            if nums[right] < nums[mid]:
                left = mid + 1
            else:
                right = mid
        return nums[left]
