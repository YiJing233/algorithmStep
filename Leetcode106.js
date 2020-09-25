// 106. 从中序与后序遍历序列构造二叉树

// 根据一棵树的中序遍历与后序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]

// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder.length) return null;
    const top = postorder.pop();
    const root = new TreeNode(top);
    const topIndex = inorder.indexOf(top);
    root.left = buildTree(inorder.slice(0, topIndex), postorder.slice(0, topIndex));
    root.right = buildTree(inorder.slice(topIndex + 1), postorder.slice(topIndex));
    return root;;
};

const buildTreeNonRec = function(inorder, postorder) {
    let post_idx;
    const idxmap = new Map();
    const helper = (in_left, in_right) => {
        if (in_left > in_right) {
            return null;
        }
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);
        const index = idx_map.get(root_val);
        post_idx--;
        root.right = helper(index + 1, in_right);

        root.left = helper(in_left, index - 1);
        return root;
    }
    post_idx = postorder.length - 1;

    var idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
}