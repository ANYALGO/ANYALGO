class Solution:
    def findDisappearedNumbers(self, nums: [int]) -> [int]:
        arr = [0] * (len(nums) + 1)
        for i in nums:
            arr[i] = 1
        result = []
        for i in range(1, len(arr)):
            if arr[i] == 0:
                result.append(i)
        return result


if __name__ == "__main__":
    s = Solution()
    print(s.findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))

