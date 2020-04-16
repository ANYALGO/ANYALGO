class Solution:
    def productExceptSelf(self, nums: [int]) -> [int]:
        left = nums[:]
        for i in range(1, len(left)):
            left[i] = left[i] * left[i - 1]
        right = nums[:]
        for i in list(range(0, len(right)-1))[::-1]:
            right[i]=right[i]*right[i+1]
        nums[0] = right[1]
        nums[len(nums) - 1] = left[len(nums) - 2]
        for i in range(1, len(nums) - 1):
            nums[i] = left[i - 1] * right[i + 1]
        return nums


if __name__ == "__main__":
    s = Solution()
    print(s.productExceptSelf([1, 2, 3, 4]))
    print(s.productExceptSelf([0,0]))