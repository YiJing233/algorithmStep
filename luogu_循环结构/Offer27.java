// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

 

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

 

// 限制：

// 0 <= 节点个数 <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

package luogu_循环结构;

public class Offer27 {
 /**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

 // 解法一 递归
class Solution {
    public TreeNode mirrorTree(TreeNode root) {
        if(root == null) return null;

        TreeNode temNode = root.left;
        root.left = mirrorTree(root.right);
        root.right = mirrorTree(temNode);

        return root;
    }
}

// 解法二 栈/队列
class Solution {
    public TreeNode mirrorTree(TreeNode root) {
        if(root == null) return null;
        Stack<TreeNode> stack = new Stack<>() {{ add(root); }};
        while(!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if(node.left != null) stack.add(node.left);
            if(node.right != null) stack.add(node.right);
            TreeNode tmp = node.left;
            node.left = node.right;
            node.right = tmp;
        }
        return root;
    }
}

}