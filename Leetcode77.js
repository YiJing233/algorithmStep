// 77. 组合

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const dfs = (cur, n, k, temp) => {
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        if (temp.length == k) {
            res.push(temp);
            return;
        }
        dfs(cur + 1, n, k, [...temp, cur]);
        dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return res;
}
