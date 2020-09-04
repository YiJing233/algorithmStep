// 257. 二叉树的所有路径
// 
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 
// 说明: 叶子节点是指没有子节点的节点。
// 
// 示例:
// 
// 输入:
// 
//    1
//  /   \
// 2     3
//  \
//   5
// 
// 输出: ["1->2->5", "1->3"]
// 
// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
// 
// 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ret = [];
    if (!root) return ret;
  function dfs(root, ret, temp) {
      temp.push(root.val);
      if (root.left == null && root.right == null) {
          ret.push(temp.join("->"));
          return;
      }
      if (root.left) {
        dfs(root.left, ret, temp);
        temp.pop();
      }
      if (root.right){
        dfs(root.right, ret, temp); 
        temp.pop();
      } 
  }
    dfs(root, ret, []);
  return ret;    
};