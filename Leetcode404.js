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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const bfs = (root)=>{
        if (root == null) return;
        if (root.left != null && root.left.left == null && root.left.right == null) sum += root.left.val;
        if (root.left != null) bfs(root.left);
        if (root.right != null) bfs(root.right);
    }
    bfs(root);
    return sum;
};