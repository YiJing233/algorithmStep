// 107. 二叉树的层次遍历 II

// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * bfs解法
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let cur = [];
        let temp = [];
        while (queue.length) {
            let node = queue.shift();
            cur.push(node.val);
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }
        res.push(cur);
        queue = temp;
    }
    return res.reverse();
};

// dfs解法

var levelOrderBottom2 = function(root) {
    let res = [];
    var dep = function(node, depth) {
        if (!node) return;
        res[depth] = res[depth] || [];
        res[depth].push(node.val);
        dep(node.left, depth+1);
        dep(node.right, depth+1);
    }
    dep(root, 0);
    return res.reverse();
}