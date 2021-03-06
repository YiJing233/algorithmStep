// 剑指 Offer 42. 连续子数组的最大和

// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。



// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。



// 提示：

//     1 <= arr.length <= 10^5
//     -100 <= arr[i] <= 100

// 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let len = nums.length;
    let dp = new Array(len);
    dp[0] = nums[0];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
};
// JS reduce写法

var reduceMaxSubArray = function (nums) {
    let max = -Infinity;
    nums.reduce((total, cur, i) => {
        if (total > 0) total += cur;
        else total = cur;
        max = max > total ? max : total;
        return total;
    }, 0)
    return max;
}
