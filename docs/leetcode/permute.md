# 全排列 - 中等

## 题目

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

## 思路

回溯（回溯搜索） = 深度优先遍历（DFS） + 状态重置 + 剪枝（提前知道这一条分支不能搜索到满意的结果，就可以提前结束，这一步操作称之为剪枝）

全排列是经典的回溯搜索。在选择当前排列数字时有两种决策，一个是选择当前数字（选择当前数字后，该数字不能再被选，继续选择），一个是选择下一个数字。

n 个数字的全排列一共有 n! 个。

- 时间复杂度 O(n x n!)
- 空间复杂度 O(n x n!)

## 解答

C++语言实现：

```C++
class Solution {

public:
    vector<vector<int>> ans;

    void dfs(int n, vector<int> nums, int depth) {
        if(depth == n) {
            ans.push_back(vector<int>(nums));
        }
        for(int i = depth; i < n; i++) {
            swap(nums[depth], nums[i]);
            dfs(n, nums, depth+1);
        }
    }

    vector<vector<int>> permute(vector<int>& nums) {
        if(nums.empty())
            return {};
        int n = nums.size();
        dfs(n, nums, 0);
        return ans;
    }

};
```
