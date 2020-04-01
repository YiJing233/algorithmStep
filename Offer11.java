// 面试题11. 旋转数组的最小数字

// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1

// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

class Solution {
    public int minArray(int[] numbers) {
        if(numbers == null || numbers.length == 0) { return -1;}
        int min = numbers[0];

        for(int i = 0; i < numbers.length - 1; i++) {
            if(numbers[i] > numbers[i+1]) {
                min = numbers[i+1];
            }
        }

        return min;
        
    }
}
// 根据整个数组的特性，当前一个数字比后一个数字打的时候就必然是后一个数字最小
// min = numbers[0] 是在有0个元素翻转情况下（相当于没翻转） 那么第一个元素就是最小的