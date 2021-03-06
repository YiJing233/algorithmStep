// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]

// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 限制：

// 0 <= 节点个数 <= 5000


/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int n = preorder.length;
        if (n==0) return null;
        int rootVal = preorder[0], rootIndex = 0;

        for(int i=0; i<n; i++){
            if(inorder[i] == rootVal){
                rootIndex = i;
                break;
            }
        }
        TreeNode root = new TreeNode(rootVal);
        root.left = buildTree(Arrays.copyOfRange(preorder, 1, 1 + rootIndex), Arrays.copyOfRange(inorder, 0, rootIndex));
        root.right = buildTree(Arrays.copyOfRange(preorder, 1 + rootIndex, n), Arrays.copyOfRange(inorder, rootIndex+1,n));

        return root;
    }
}

//二叉树是一种很适合用递归方法的数据结构，因为本身的定义就是递归的
//这套算法其实相当于将大脑直观的想法复现出来