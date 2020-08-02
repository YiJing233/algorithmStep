// 114. 二叉树展开为链表

// 给定一个二叉树，原地将它展开为一个单链表。

 

// 例如，给定二叉树

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

// 将其展开为：

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root == null) return;
    flatten(root.right);
    flatten(root.left);
    let tem = new TreeNode();
    tem = root.right;
    root.right = root.left;
    root.left = null;
    while(root.right != null) root = root.right;
    root.right = tem;
};