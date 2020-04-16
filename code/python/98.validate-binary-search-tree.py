class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


from functools import reduce


class Solution:
    def inorder(self, root) -> [int]:
        if not root:
            return []
        return self.inorder(root.left) + [root.val] + self.inorder(root.right)

    def isValidBST(self, root: TreeNode) -> bool:
        arr = self.inorder(root)
        return all(arr[i] < arr[i + 1] for i in range(len(arr) - 1))

