// 632. 最小区间

// 你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。

// 我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。

// 示例 1:

// 输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
// 输出: [20,24]
// 解释: 
// 列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
// 列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
// 列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。

// 注意:

//     给定的列表可能包含重复元素，所以在这里升序表示 >= 。
//     1 <= k <= 3500
//     -105 <= 元素的值 <= 105
//     对于使用Java的用户，请注意传入类型已修改为List<List<Integer>>。重置代码模板后可以看到这项改动。

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let allNums = [];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[i] = 0;          // 初始化出现次数
    for (let j = 0; j < nums[i].length; j++) {
      allNums.push({
        num: nums[i][j], // 数值本身
        type: i          // 来源于哪个数组
      });
    }
  }
  allNums.sort((a, b) => a.num - b.num);
  let left = 0;
  let count = 0;
  let minLen = Infinity;
  let minStart = 0;
  for (let right = 0; right < allNums.length; right++) { // 主旋律定为扩张
    if (map[allNums[right].type] == 0) count++;          // 纳入了之前没纳入的目标数字，count++
    map[allNums[right].type]++;                          // 纳入数字，对应的出现次数+1
    while (count == nums.length && left <= right) { // 找齐所有目标数字，且区间不被破坏的前提下收缩
      if (allNums[right].num - allNums[left].num < minLen) { // 出现了比minLen更小的解
        minLen = allNums[right].num - allNums[left].num;     // 更新minLen
        minStart = allNums[left].num;                        // 更新minStart
      }
      map[allNums[left].type]--;                 // 收缩之前更新一下map
      if (map[allNums[left].type] == 0) count--; // map对应的数字出现次数减为0，count--
      left++;                                    // 收缩窗口
    }
  }
  return [minStart, minStart + minLen];
};