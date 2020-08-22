// 679. 24 点游戏

//你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。

//示例 1:

//输入: [4, 1, 8, 7]
//输出: True
//解释: (8-4) * (7-1) = 24

//示例 2:

//输入: [1, 2, 1, 2]
//输出: False

//注意:

//    除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。
//    每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允许的。
//    你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */


// 1 递归解法
var judgePoint24 = function(nums) {
    // if (nums[0] * nums[1] * nums[2] * nums[3] < 24) return false;
    if (nums[0] + nums[1] + nums[2] + nums[3] < 10) return false;

    const len = nums.length;
    if (len == 1) { // 递归的出口，剩一个数，处理一下精度丢失的问题
        const diff = nums[0] - 24;
        return Math.abs(diff) < 0.00001;
    }

    let isValid = false; // 控制是否进入递归的标识变量

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
        const numsCopy = nums.slice(); // 拷贝一份原数组
        numsCopy.splice(j, 1); // 先删除索引大的数字，不会影响索引小的数字的位置
        numsCopy.splice(i, 1);

        const n1 = nums[i];
        const n2 = nums[j];
      // 加
        isValid = isValid || judgePoint24(numsCopy.concat(n1 + n2));
      // 减与被减
        isValid = isValid || judgePoint24(numsCopy.concat(n1 - n2));
        isValid = isValid || judgePoint24(numsCopy.concat(n2 - n1));
      // 乘
        isValid = isValid || judgePoint24(numsCopy.concat(n1 * n2));
        if (n2 !== 0) { // 除
            isValid = isValid || judgePoint24(numsCopy.concat(n1 / n2));
        }
        if (n1 !== 0) { // 被除
            isValid = isValid || judgePoint24(numsCopy.concat(n2 / n1));
        }
        if (isValid) return true; 
    }
    }

  return false; // 遍历结束，始终没有返回真，那就返回false
};

// 2. 回溯算法
    // 有四个数要构成24点 最后肯定是两组数做四则运算的结果 有两种情况

    // 第一组两个数先做四则运算 第二组两个数做四则运算 然后这两组的结果再分别做四则运算
    // 第一组1个数 第二组三个数做四则运算 然后这两组的结果再分别做四则运算

    // 编写一个函数(_getTwoNumberResults)获取只有两个数进行四则运算的可能结果 返回一个数组
    // 再编写一个函数(getTwoNumberResults)用来兼容参数包含数组时的情况 返回一个数组
    // 然后再编写一个函数(getThreeNumberResults)用来获取三个数四则运算的可能结果 返回一个数组
    // 三个数只有一种情况 第一组1个数 第二组2个数做四则运算 然后这两组的结果再分别做四则运算
    // 函数准备完毕以后 就可以求四个数的四则运算结果是不是等于24了
    // 详细分类有一下七种 前3种是每组各两个数 后4种是第一组一个数 第二组三个数

    // getTwoNumberResults(getTwoNumberResults(nums[0], nums[1]), getTwoNumberResults(nums[2], nums[3]))
    // getTwoNumberResults(getTwoNumberResults(nums[0], nums[2]), getTwoNumberResults(nums[1], nums[3]))
    // getTwoNumberResults(getTwoNumberResults(nums[0], nums[3]), getTwoNumberResults(nums[1], nums[2]))
    // getTwoNumberResults(nums[0], getThreeNumberResults([nums[1], nums[2], nums[3]]))
    // getTwoNumberResults(nums[1], getThreeNumberResults([nums[0], nums[2], nums[3]]))
    // getTwoNumberResults(nums[2], getThreeNumberResults([nums[0], nums[1], nums[3]]))
    // getTwoNumberResults(nums[3], getThreeNumberResults([nums[0], nums[1], nums[2]]))


var judgePoint24 = function(nums) {
  const _getTwoNumberResults = function(num1, num2) {
    const array = new Array();
    array.push(num1 +  num2)
    array.push(num1 -  num2)
    array.push(num2 -  num1)
    array.push(num1 *  num2)
    num2 !== 0 && array.push(num1 / num2)
    num1 !== 0 && array.push(num2 / num1)
    return array;
  }
  const getTwoNumberResults = function(num1, num2) {
    if (Array.isArray(num2)) {
      if (Array.isArray(num1)) {
        return num1.reduce((array, num1) => 
          array = array.concat(num2.reduce((array, num2) => array = array.concat(_getTwoNumberResults(num1, num2)), []))
        , []);
      } else {
        return num2.reduce((array, num2) => array = array.concat(_getTwoNumberResults(num1, num2)), []);
      }
    } else {
      return _getTwoNumberResults(num1, num2);
    }
  }
  const getThreeNumberResults = function(arr) {
    let array = [];
    array = array.concat(getTwoNumberResults(arr[0], getTwoNumberResults(arr[1], arr[2])))
    array = array.concat(getTwoNumberResults(arr[1], getTwoNumberResults(arr[0], arr[2])))
    array = array.concat(getTwoNumberResults(arr[2], getTwoNumberResults(arr[0], arr[1])))
    return array;
  }
  const isEqualTo24 = function(num) {
    return Math.abs(num - 24) <= 0.01
  }
  if (
    getTwoNumberResults(getTwoNumberResults(nums[0], nums[1]), getTwoNumberResults(nums[2], nums[3])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(getTwoNumberResults(nums[0], nums[2]), getTwoNumberResults(nums[1], nums[3])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(getTwoNumberResults(nums[0], nums[3]), getTwoNumberResults(nums[1], nums[2])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(nums[0], getThreeNumberResults([nums[1], nums[2], nums[3]])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(nums[1], getThreeNumberResults([nums[0], nums[2], nums[3]])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(nums[2], getThreeNumberResults([nums[0], nums[1], nums[3]])).find(num => isEqualTo24(num)) ||
    getTwoNumberResults(nums[3], getThreeNumberResults([nums[0], nums[1], nums[2]])).find(num => isEqualTo24(num))
  ) {
    return true;
  }
  return false;
};