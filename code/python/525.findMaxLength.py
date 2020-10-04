class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        count = 0
        m = dict()
        mx = 0
        m[0] = -1
        for i in range(len(nums)):
            if nums[i] == 0:
                count -= 1
            elif nums[i] == 1:
                count += 1
            if m.get(count) is not None:
                mx = max(mx, i - m.get(count))
            else:
                m[count] = i
        return mx