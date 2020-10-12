// 530. 二叉搜索树的最小绝对差

// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

// 示例：

// 输入：

//    1
//     \
//      3
//     /
//    2

// 输出：
// 1

// 解释：
// 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

 

// 提示：

//     树中至少有 2 个节点。
//     本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let ans = Math.MAX_SAFE_INTEGER
    let pre = -1;
    const dfs = (root)=>{
        if (root == null) {
            return
        }
        dfs(root.left);
        if (pre == -1) {
            pre = root.val
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val
        }
        dfs(root.right);
    }
    dfs(root)
    return ans;
}