class Solution
{
public:
    int maximumGap(vector<int> &nums)
    {
        if (nums.empty() || nums.size() < 2)
        {
            return 0;
        }
        sort(nums.begin(), nums.end());
        int _max = 0;
        for (int i = 0; i < nums.size() - 1; i++)
        {
            _max = max(nums[i + 1] - nums[i], _max);
        }
        return _max;
    }
};