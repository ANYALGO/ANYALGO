# 组合总和 - 中等

## 题目

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。

## 思路

回溯（回溯搜索） = 深度优先遍历（DFS） + 状态重置 + 剪枝（提前知道这一条分支不能搜索到满意的结果，就可以提前结束，这一步操作称之为剪枝）

根据题目，满足条件的数字组合在选择当前数字时有两种决策，一个是选择当前数字（选择当前数字后，target需要减去当前数字，继续选择），一个是选择下一个数字因此题目实际上是决策树的回溯搜索。

- 时间复杂度 O(n)
- 空间复杂度 O(n)

## 解答

C++语言实现：

```C++
class Solution {
public:
    vector<vector<int>> ans;
    vector<int> path;

    void dfs(vector<int>& candidates, int target, int pos) {
        if (target == 0) {
            ans.push_back(path);
            return;
        }
        if (target < 0) {  
            // 剪枝
            return;
        }
        if (pos == candidates.size()) {
            return;
        }

        path.push_back(candidates[pos]);
        // 选当前
        dfs(candidates, target - candidates[pos], pos);
        path.pop_back();

        // 不选当前选下一个
        dfs(candidates, target, pos + 1);
    }

    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        dfs(candidates, target, 0);
        return ans;
    }
};
```
