/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if p.Val == root.Val {
        return p
    }
    if q.Val == root.Val {
        return q
    }

    if q.Val < root.Val && p.Val < root.Val {
        return lowestCommonAncestor(root.Left, p, q)   
    }
    if q.Val > root.Val && p.Val > root.Val {
        return lowestCommonAncestor(root.Right, p, q)  
    } 
    return root
}