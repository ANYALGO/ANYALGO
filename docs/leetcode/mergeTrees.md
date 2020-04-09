# 合并二叉树 - 简单

## 题目

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

## 思路

二叉树的递归遍历。

- 时间复杂度 O(N)，N 是两棵树中节点个数的较小值
- 空间复杂度 O(N))，在最坏情况下，会递归 N 层，需要 O(N) 的栈空间。

## 解答

### 解答一：递归

```C
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


struct TreeNode* mergeTrees(struct TreeNode* t1, struct TreeNode* t2){
    if (t1 == NULL && t2 == NULL) {
       return NULL;
    }
    struct TreeNode* resultTree = (struct TreeNode *) malloc (sizeof(struct TreeNode));
    if (t1 != NULL && t2 != NULL) {
        resultTree->val = (t1->val + t2->val);
    } else if (t1 != NULL) {
        resultTree->val = t1->val;
    } else if (t2 != NULL) {
        resultTree->val = t2->val;
    }
    resultTree->left = mergeTrees(t1 == NULL ? NULL : t1->left, t2 == NULL ? NULL :t2->left);
    resultTree->right = mergeTrees(t1 == NULL ? NULL :t1->right,t2 == NULL ? NULL : t2->right);
    return resultTree;
}
```

节省内存，直接使用t1数存储合并结果，去除resultTree。

```C++
struct TreeNode* mergeTrees(struct TreeNode* t1, struct TreeNode* t2){
   if (t1 == NULL)
        return t2;
    if (t2 == NULL)
        return t1;
    t1->val += t2->val;
    t1->left = mergeTrees(t1->left, t2->left);
    t1->right = mergeTrees(t1->right, t2->right);
    return t1;
}
```

### 解答二：迭代

使用数据结构——栈模拟方法栈。

```C++
struct TreeNode *mergeTrees(struct TreeNode *t1, struct TreeNode *t2)
{
    if (t1 == NULL)
        return t2;
    if (t2 == NULL)
        return t1;
    stack<TreeNode *> stackTree;
    stackTree.push(t2);
    stackTree.push(t1);
    while (!stackTree.empty())
    {
        TreeNode *p1 = stackTree.top();
        stackTree.pop();
        TreeNode *p2 = stackTree.top();
        stackTree.pop();
        if (p1 == NULL || p2 == NULL)
        {
            continue;
        }
        p1->val += p2->val;
        if (p1->left == NULL)
        {
            p1->left = p2->left;
        }
        else
        {
            stackTree.push(p2->left);
            stackTree.push(p1->left);
        }
        if (p1->right == NULL)
        {
            p1->right = p2->right;
        }
        else
        {
            stackTree.push(p2->right);
            stackTree.push(p1->right);
        }
    }
    return t1;
}
```
