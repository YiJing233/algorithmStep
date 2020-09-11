// 377. 组合总和 Ⅳ

// 给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。

// 示例:

// nums = [1, 2, 3]
// target = 4

// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// 请注意，顺序不同的序列被视作不同的组合。

// 因此输出为 7。

// 进阶：
// 如果给定的数组中含有负数会怎么样？
// 问题会产生什么变化？
// 我们需要在题目中添加什么限制来允许负数的出现？

// 致谢：
// 特别感谢 @pbrother 添加此问题并创建所有测试用例。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 一道动态规划题，可以记忆化搜索
 */
var combinationSum4 = function(nums, target) {
    let count = 0;
    nums = nums.sort((a, b)=> a - b);
    dfs(nums, target);

    function dfs(nums, target) {
        if (target == 0) {
            count++;
            return;  
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                if (nums[i] > target) return;
                else {
                    count++;
                    continue;
                }
            }
            dfs(nums, target - nums[i]);
        }
    }

    return count;
};
// 记忆化搜索
var combinationSum4Remenber = function (nums, target) {
  const memo = new Array(target + 1);
  memo[0] = 1;
  nums.sort((a, b)=> a - b);
  function dfs(target) {
      if (memo[target] === undefined) {
          let sum = 0;
          for (let num of nums) {
              if (target < num) break;
              sum += dfs(target - num);
          }
          memo[target] = sum;
      }
      return memo[target]
  }
  return dfs[target];  
};