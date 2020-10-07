class Solution:
    def buddyStrings(self, A: str, B: str) -> bool:
        if len(A) != len(B):
            return False
        if A == B and len(A) > len(set(A)):
            return True
        ans = []
        for i in range(len(A)):
            if A[i] != B[i]:
                ans.append([A[i], B[i]])
            if len(ans) > 2:
                return False
        if len(ans) < 2:
            return False
        return ans[0][0] == ans[1][1] and ans[1][0] == ans[0][1]
