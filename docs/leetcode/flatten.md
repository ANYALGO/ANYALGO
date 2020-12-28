# 二叉树展开为链表 - 中等

## 题目

给定一个二叉树，原地将它展开为链表。

## 思路

题目的意思是利用二叉树的右指针转换为链表，顺序是先序遍历的顺序。

### 思路一

1. 将左子树插入到右子树的地方
2. 将原来的右子树接到左子树的最右边节点
3. 考虑新的右子树的根节点，一直重复上边的过程，直到新的右子树为空

- 时间复杂度 O(n)
- 空间复杂度 O(1)

### 思路二

先序遍历后保存结果，然后串联为链表。

- 时间复杂度 O(n)
- 空间复杂度 O(1)

## 解答

### 解答一

C++语言实现：

```C++
class Solution {
public:
    void flatten(TreeNode* root) {
        while (root != NULL) {
            // 左子树为空，直接考虑下一个节点
            if (root->left == NULL) {
                root = root->right;
            } else {
                // 找左子树最右边的节点
                TreeNode* pre = root->left;
                while (pre->right != NULL) {
                    pre = pre->right;
                }
                // 将原来的右子树接到左子树的最右边节点
                pre->right = root->right;
                // 将左子树插入到右子树的地方
                root->right = root->left;
                root->left = NULL;
                // 考虑下一个节点
                root = root->right;
            }
        }
    }
};
```
