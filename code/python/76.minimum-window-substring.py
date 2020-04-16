class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if s == t:
            return s
        if len(t) > len(s):
            return ""
        d = dict(zip(t, [-1] * len(t)))
        for i in range(len(s)):
            if s[i] in t:
                d[s[i]] = i
        if -1 in d.values():
            return ""
        left = 0
        result = s
        d = dict(zip(t, [-1] * len(t)))
        while s[left] not in t:
            left += 1
        right = left
        d[s[right]] = right
        while right < len(s):
            if s[right] in t:
                d[s[right]] = right
                if right > left and s[left] == s[right]:
                    left = min(list(filter(lambda x: x > -1, d.values())))
                if min(d.values()) != -1 and right - left + 1 <= len(result):
                    result = s[left : right + 1]
            right += 1
        return result


if __name__ == "__main__":
    s = Solution()

    print(s.minWindow("ADOBECODEBANC", "ABC"))
