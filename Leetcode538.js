// 538. 把二叉搜索树转换为累加树

// 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

 

// 例如：

// 输入: 原始二叉搜索树:
//               5
//             /   \
//            2     13

// 输出: 转换为累加树:
//              18
//             /   \
//           20     13

 

// 注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var num = 0;
    const task = (root)=>{
        if (root != null) {
            task(root.right);
            root.val += num;
            num = root.val;
            task(root.left);
            return root;
        }
    return null; 
    }
    return task(root);
};