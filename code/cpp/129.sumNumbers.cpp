struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution
{
public:
    int sumNumbers(TreeNode *root)
    {
        return dfs(root,0):
    }

    int dfs(TreeNode *root, int num)
    {
        if (root == nullptr)
            return 0;
        int val = num * 10 + root->val;
        if (root->left == nullptr && root->right == nullptr)
            return val;
        return dfs(root->left, val) + dfs(root->right, val);
    }
};