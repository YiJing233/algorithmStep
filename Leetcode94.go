// 94. 二叉树的中序遍历

// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 // 递归解法
var res []int
func inorderTraversal(root *TreeNode) []int {
	res = make([]int, 0)
	dfs(root)
	return res
}

func dfs(root *TreeNode)  {
	if root != nil {
		dfs(root.Left)
		res = append(res, root.Val)
		dfs(root.Right)
	}
}


// 迭代解法
func inorderTraversal(root *TreeNode) []int {
	var res []int
	var stack []*TreeNode

	for len(stack) > 0 || root != nil {
		for root != nil {
			stack = append(stack, root) //入栈
			root = root.Left            //移至最左
		}
		index := len(stack) - 1             //栈顶
		res = append(res, stack[index].Val) //中序输出
		root = stack[index].Right           //右节点会进入下次循环，如果 =nil，继续出栈
		stack = stack[:index]               //出栈
	}
	return res
}