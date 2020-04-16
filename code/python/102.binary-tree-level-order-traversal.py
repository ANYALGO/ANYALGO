class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> [[int]]:
        if not root:
            return []
        fifo = [root]
        result = []
        while fifo:
            result.append(list(map(lambda x: x.val, fifo)))
            l = len(fifo)
            for _ in range(l):
                p = fifo.pop(0)
                if p.left:
                    fifo.append(p.left)
                if p.right:
                    fifo.append(p.right)
        return result

