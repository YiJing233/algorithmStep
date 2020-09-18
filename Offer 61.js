// 剑指 Offer 61. 扑克牌中的顺子

// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 

// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True

 

// 示例 2:

// 输入: [0,0,1,2,5]
// 输出: True

 

// 限制：

// 数组长度为 5 

// 数组的数取值为 [0, 13] .

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let len = nums.length;
    var count = 0;
    let sum = 0;
    var index;
    nums.sort((a, b)=> a-b);

    for (index = 0; index < len -1; index++) {
        if (nums[index] == 0) {
            count++;
            continue;  
        } else {
            if (nums[index] == nums[index+1]) return false;
            if (nums[index] + 1 != nums[index+1]) {
                count -= nums[index+1] - nums[index] -1;
            }
        }
    }
    if (count < 0 ) return false;
    return true;
};