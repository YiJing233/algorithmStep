// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。

 

// 提示：

//     1 <= nums.length <= 50000
//     1 <= nums[i] <= 10000


/**
 * @param {number[]} nums
 * @return {number[]}
 */

const exchange = (num)=>{
    var left = 0;
    var right = num.length -1;

    while(left < right) {
        if (num[left] % 2 == 1) left++;
        else if (num[right] % 2 == 0) right--;
        else {
            let tem = num[left];
            num[left] = num[right];
            num[right] = tem;
            left++;
            right--;
        }
    }
    return num;
}