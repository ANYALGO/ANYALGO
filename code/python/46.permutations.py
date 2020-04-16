class Solution:
    def permute(self, nums: [int]) -> [[int]]:
        if len(nums) <= 1:
            return [nums]
        ans = []
        perms = self.permute(nums[1:])
        for perm in perms:
            for i in range(0, len(perm) + 1):
                p = perm[:i] + [nums[0]] + perm[i:]
                ans.append(p)
        return ans
