//112. 路径总和

//给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

//说明: 叶子节点是指没有子节点的节点。

//示例: 
//给定如下二叉树，以及目标和 sum = 22，

              //5
             /// \
            //4   8
           ///   / \
          //11  13  4
         ///  \      \
        //7    2      1

//返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。


/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// 解法一：层次遍历，孩子节点继承父节点的val，遇到叶子节点（即没有左右孩子的情况）判断val是否为sum
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) return false;
        LinkedList<TreeNode> queue = new LinkedList<TreeNode>();
        TreeNode cur = null;
        queue.offer(root);
        while (!queue.isEmpty()) { // 遍历一次，遍历时对左右孩子加val;
            cur = queue.poll();
            if (cur.left != null) {
                cur.left.val += cur.val;
                queue.offer(cur.left);
            }
            if (cur.right != null) {
                cur.right.val += cur.val;
                queue.offer(cur.right);
            }
            if (cur.left == null && cur.right == null) { // 叶子节点
                if (cur.val == sum) return true;
            }
        }
        return false;
    }  
}

// 解法二：递归解法，
public class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null){
            return false;
        }
        if(root.left == null && root.right == null){// 判断是否为叶子节点
            return root.val == sum;//这个比较巧妙
        }
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
        
    }
}

// 解法三，广度优先搜索，维护两个队列，这样我们使用两个队列，分别存储将要遍历的节点，以及根节点到这些节点的路径和
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) {
            return false;
        }
        Queue<TreeNode> queNode = new LinkedList<TreeNode>();
        Queue<Integer> queVal = new LinkedList<Integer>();
        queNode.offer(root);
        queVal.offer(root.val);
        while (!queNode.isEmpty()) {
            TreeNode now = queNode.poll();
            int temp = queVal.poll();
            if (now.left == null && now.right == null) {
                if (temp == sum) {
                    return true;
                }
                continue;
            }
            if (now.left != null) {
                queNode.offer(now.left);
                queVal.offer(now.left.val + temp);
            }
            if (now.right != null) {
                queNode.offer(now.right);
                queVal.offer(now.right.val + temp);
            }
        }
        return false;
    }
}

