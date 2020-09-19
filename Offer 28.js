// 剑指 Offer 28. 对称的二叉树

// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

 

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

// 示例 2：

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

 

// 限制：

// 0 <= 节点个数 <= 1000

// 注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 优化前版本，多了一次固定的root左右孩子的比较
var isSymmetric = function(root) {
    const compare = (aTree, bTree)=> {
        if (aTree == null && bTree == null) return true;
        if (aTree !== null && bTree == null) return false;
        if (aTree == null && bTree !== null) return false;
        if (aTree.val !== bTree.val) return false;
        if (compare(aTree.left, bTree.right) && compare(aTree.right, bTree.left)) return true;
        return false;
    };
    if (root == null) return true;
    if (compare(root.left, root.right)) return true;
    return false; 
};

// 优化后版本，全部抽象成一起
var isSymmetric = function(root) {
    const recur = (lTree, rTree)=>{
        if(lTree == null && rTree == null) return true;
        if(lTree == null || rTree == null || lTree.val != rTree.val) return false;
        return recur(lTree.left, rTree.right) && recur(lTree.right, rTree.left);
    }    
    return root == null ? true : recur(root.left, root.right);
}
