// 1124. 表现良好的最长时间段

// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。

 

// 示例 1：

// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。

 

// 提示：

//     1 <= hours.length <= 10000
//     0 <= hours[i] <= 16

/**
 * @param {number[]} hours
 * @return {number}
 */

 var longestWPI = (hours)=>{
    let preSum = new Array(hours.length + 1).fill(0);
    for (let i = 1; i < hours.length -1; i++) {
        if (hours[i-1] > 8) preSum[i] = preSum[i - 1] + 1;
        else preSum[i] = preSum[i - 1] - 1;
    }
    let max = 0;
    for (let i = 0; i < preSum.length - 1; i++) {
        for (let j = i + 1; j < preSum.length; j++) {
            if (preSum[j] - preSum[i] > 0) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
 }
