// 145. 二叉树的后序遍历

// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 * // 递归解法
 */
func postorderTraversal(root *TreeNode) (res []int) {
    var postorder func(*TreeNode)
    postorder = func(node *TreeNode) {
        if node == nil {
            return
        }
        postorder(node.Left)
        postorder(node.Right)
        res = append(res, node.Val)
    }
    postorder(root)
    return
}

func postorderTraversal(root *TreeNode) (res []int) {
    stack := []*TreeNode{}
    var prev *TreeNode // 记录遍历到的节点
    for root != nil || len(stack) > 0 {
        for root != nil {
            stack = append(stack, root) //root入栈
            root = root.Left // 遍历左子树
        }
        root = stack[len(stack)-1] // 出栈操作
        stack = stack[:len(stack)-1]
        if root.Right == nil || root.Right == prev {// 右子树为空或者是之前记录的节点
            res = append(res, root.Val) // root加入结果
            prev = root // 记录这个之前遍历的节点
            root = nil
        } else {// 右子树不为空或者是之前记录的节点
            stack = append(stack, root) //root入栈
            root = root.Right //从右子树开始遍历吼
        }
    }
    return
}