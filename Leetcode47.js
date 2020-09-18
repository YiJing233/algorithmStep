// 47. 全排列 II

// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

// 示例:

// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permuteUnique (nums) {
    let res = [];
    let len = nums.length;
    let used = new Array(len);
    nums.sort((a, b)=> a - b);

    const dfs = (tem)=>{
        if (tem.length == len) {
            res.push(tem.slice());
            return;
        }

        for (let i = 0; i < len; i++) {
            if (nums[i-1] == nums[i] && i-1>=0 && !used[i-1]) continue;
            if (used[i]) continue;
            tem.push(nums[i]);
            used[i] = 1;
            dfs(tem);
            tem.pop();
            used[i] = 0;
        }
    };

    dfs([]);
    return res;
}
