class NumArray
{
private:
    vector<int> sums;

public:
    NumArray(vector<int> &nums)
    {
        int len = nums.size();
        if (len == 0)
        {
            return;
        }
        sums.resize(len + 1);
        sums[0] = 0;
        for (int i = 1; i <= len; i++)
        {
            sums[i] = sums[i - 1] + nums[i - 1];
        }
    }

    int sumRange(int i, int j)
    {
        if (sums.size() == 0)
        {
            return 0;
        }
        return sums[j + 1] - sums[i];
    }
};
/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(i,j);
 */