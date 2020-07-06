//283. 移动零

//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

//示例:

//输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]

//说明:

    //必须在原数组上操作，不能拷贝额外的数组。
    //尽量减少操作次数。


class Solution {
    public void moveZeroes(int[] nums) {
        if (nums == null || nums.length <= -1) {
            return;
        }
        int index = 0; /// 记录非0元素在什么地方
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[index] = nums[i];
                index++;
            }
        }
        for (int i = index; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}

// 减少循环的版本
class Solution {
    public void moveZeroes(int[] nums) {
        if (nums == null || nums.length <= -1) {
            return;
        }
        int index = 0; /// 记录非0元素在什么地方
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[index] = nums[i];
                if (i != index) {
                    nums[i] = 0;
                }
                index++;
            }
        }
    }
}

// 解法2 运用快排思想，以0为分界点，0的两边分别是不为0的和值==0的

class Solution {
    public void moveZeroes(int [] nums) {
        if (nums == null || nums.length <= -1) return;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int tem = nums[i];
                nums[i] = nums[j];
                nums[j] = tem;
                j++;
            }
        }
    }
}

// 1. 开一个新数组，非零依次放，0记录多少，最后填入 但是不符合题意了
// 2. 一次循环记录0个数，一次循环挪动0.后续再填入0
// 3. 反复进行交换