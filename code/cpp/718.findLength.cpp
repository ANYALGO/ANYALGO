#include <vector>
using namespace std;
class Solution
{
    public : int findLength(vector<int> &A, vector<int> &B)
    {
        vector<vector<int>> dp(A.size() + 1, vector<int>(B.size() + 1, 0));
        int _max = 0;
        for (auto i = 0; i < A.size(); i++)
        {
            for (auto j = 0; j < B.size(); j++)
            {
                if (A[i] == B[j])
                {
                    dp[i + 1][j + 1] = dp[i][j] + 1;
                    _max = max(dp[i + 1][j + 1], _max);
                }
            }
        }
        return _max;
    }
};