// 416. 分割等和子集

// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 注意:

//     每个数组中的元素不会超过 100
//     数组的大小不会超过 200

// 示例 1:

// 输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].

 

// 示例 2:

// 输入: [1, 2, 3, 5]

// 输出: false

// 解释: 数组不能分割成两个元素和相等的子集.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let len = nums.length;
    if (len == 0) return false;
    let sum = 0;
    nums.forEach((value)=>{
        sum += value;
    })
    if (sum % 2 != 0) {
        return false
    }
    let target = sum / 2;
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp.push(new Array(target + 1).fill(false))
    }
    dp[0][0] = true;
    if (nums[0] == target) {
        dp[0][nums[0]] = true;
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (nums[i] <= j) {
               dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
        if (dp[i][target]) {
            return true;
        }
    }
    return dp[len - 1][target];    
};