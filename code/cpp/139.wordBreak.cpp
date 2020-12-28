#include <unordered_set>
#include <vector>
#include <string>

using namespace std;
class Solution
{
public:
    bool wordBreak(string s, vector<string> &wordDict)
    {
        unordered_set<string> dict(wordDict.cbegin(), wordDict.cend());
        auto n = s.length();
        s = " " + s;
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        for (auto i = 1; i <= n; i++)
        {
            for (auto j = 0; j < i; j++)
            {
                if (dp[j] == 1)
                {
                    if (dict.count(s.substr(j + 1, i - j)))
                    {
                        dp[i] = 1;
                        break;
                    }
                }
            }
        }
        return dp[n];
    }
};