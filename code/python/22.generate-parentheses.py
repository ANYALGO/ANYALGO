class Solution:
    def generateParenthesis(self, n: int) -> [str]:
        ans = []

        def help(s, left, right):
            print(s, left, right)
            if left + right == 2 * n:
                ans.append(s)
                return
            if left < n:
                help(s + "(", left + 1, right)
            if right < left:
                help(s + ")", left, right + 1)

        help("", 0, 0)
        return ans

if __name__ == "__main__":
    s=Solution()
    s.generateParenthesis(3)