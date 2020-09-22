// 968. 监控二叉树

// 给定一个二叉树，我们在树的节点上安装摄像头。

// 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。

// 计算监控树的所有节点所需的最小摄像头数量。



// 示例 1：

// 输入：[0,0,null,0,0]
// 输出：1
// 解释：如图所示，一台摄像头足以监控所有节点。

// 示例 2：

// 输入：[0,0,null,0,null,0,null,null,0]
// 输出：2
// 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。


// 提示：

//     给定树的节点数的范围是 [1, 1000]。
//     每个节点的值都是 0。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 0 表示未覆盖
// 1 表示已经覆盖
// 2 表示这个位置安了摄像头

const minCameraCover = (root) => {
    const dfs = (node) => {
        if (node == null) return 1;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if (left == 0 || right == 0) {
            ans++;
            return 2;
        } else if (left == 1 && right == 1) {
            return 0;
        } else if (left + right >= 3) {
            return 1;
        }
        return -1;
    }

    let ans = 0;
    if (dfs(root) == 0) {
        ans++;
    }
    return ans;
}

