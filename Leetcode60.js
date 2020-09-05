// 60. 第k个排列

// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

//     "123"
//     "132"
//     "213"
//     "231"
//     "312"
//     "321"

// 给定 n 和 k，返回第 k 个排列。

// 说明：

//     给定 n 的范围是 [1, 9]。
//     给定 k 的范围是[1,  n!]。

// 示例 1:

// 输入: n = 3, k = 3
// 输出: "213"

// 示例 2:

// 输入: n = 4, k = 9
// 输出: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 迭代做法，按照从左到右的顺序
 */
var getPermutation = function(n, k) {
    var total = 1;
    var nums = [];
    for (var i=1; i<=n; i++) {
        total *= i;
        nums.push(i);
    }
    var result = '';
    while (n > 0) {
        total /= n;
        n--;
        var sectionIndex = k % total || total;
        var section = sectionIndex === total ? Math.floor(k / total) : Math.floor(k / total) + 1;
        k = sectionIndex;
        result += nums[section-1];
        nums.splice(section-1, 1);
    }
    return result;
};

// 递归做法
const getPermutation = (n, k) => {
  let count = 0;
  const used = new Set();

  const helper = (temp) => {
    if (temp.length == n) {
      count++;            
      if (count == k) {
        return temp.join('');
      }
      return;
    }
    for (let i = 1; i <= n; i++) { // 枚举出所有选择
      if (used.has(i)) continue;   // 已经选过，跳过
      temp.push(i);                // 选择
      used.add(i);
      const res = helper(temp);    // 递归 往下选，获取返回值
      temp.pop();                  // 撤销选择
      used.delete(i);
      if (res) {                   // 有返回值，说明找到了，返回res，结束掉遍历
        return res; 
      }
    }
  };

  return helper([]);
};
