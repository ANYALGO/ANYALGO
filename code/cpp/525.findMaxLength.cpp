#include <vector>
#include <unordered_map>

class Solution
{
public:
    int findMaxLength(vector<int> &nums)
    {
        map<int, int> m{{0, -1}};
        int sum = 0;
        int ans = 0;
        for (int i = 0; i < nums.size(); ++i)
        {
            sum += !nums[i] ? -1 : 1;
            if (m.count(sum))
                ans = max(ans, i - m[sum]);
            else
                m[sum] = i;
        }
        return ans;
    }
};