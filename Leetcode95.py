# 95. 不同的二叉搜索树 II

# 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

 

# 示例：

# 输入：3
# 输出：
# [
#   [1,null,3,2],
#   [3,2,null,1],
#   [3,1,null,null,2],
#   [2,1,3],
#   [1,null,2,null,3]
# ]
# 解释：
# 以上的输出对应以下 5 种不同结构的二叉搜索树：

#    1         3     3      2      1
#     \       /     /      / \      \
#      3     2     1      1   3      2
#     /     /       \                 \
#    2     1         2                 3

 

# 提示：

#     0 <= n <= 8

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[TreeNode]:
        def helper(start, end):
            if start > end:
                return [None]
            nodes = []
            for i in range(start, end+1):
                leftnodes = helper(start, i-1)
                rightnodes = helper(i+1, end)
                for left in leftnodes:
                    for right in rightnodes:
                        nodes.append(TreeNode(i, left, right))
            return nodes
        return helper(1, n) if n else []