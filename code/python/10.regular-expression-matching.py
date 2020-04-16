class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p:
            return not s
        if s == p:
            return True
        if len(p) > 1 and p[1] == "*":
            if s and (s[0] == p[0] or p[0] == "."):
                return self.isMatch(s, p[2:]) or self.isMatch(s[1:], p)
            else:
                return self.isMatch(s, p[2:])
        elif s and p and (s[0] == p[0] or p[0] == "."):
            return self.isMatch(s[1:], p[1:])
        return False


