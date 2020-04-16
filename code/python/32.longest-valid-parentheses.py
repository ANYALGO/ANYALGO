class Solution:
    def longestValidParentheses(self, s):
        _max = 0
        stack = []
        cur = -1
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            else:
                if len(stack) == 0:
                    cur = i
                else:
                    stack.pop()
                    if len(stack) == 0:
                        _max = max(_max, i - cur)
                    else:
                        _max = max(_max, i - stack[len(stack) - 1])
        return _max
