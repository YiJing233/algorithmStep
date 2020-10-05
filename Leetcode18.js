// 18. 四数之和

// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

 var fourSum = (nums, target)=>{
    let res = [];
    let len = nums.length;
    if (len < 4) {
        return res;
    }
    nums = nums.sort((a,b)=>a-b);
    for (let i = 0; i < len -3; i++) {
        if (i >0 && nums[i] === nums[i-1]) {
            // 与前一个值相同，情况是重复的，要排除
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            // 当连续的四个值是大于target的，说明再往前去已经没有了
            break;
        }
        if (nums[i] + nums[len-3] + nums[len-2] + nums[len-1] < target) {
            // i和nums的最后三个值的和小于target，说明还有机会，可以继续 
            continue;  
        }
        // 左边界确定后确定右边界
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) {
                // 一样的，右边界相同也要continue排除重复
                continue;
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                // 连续四个大于，也break
                break;
            }
            if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
                // 连续小于，还可以继续
                continue;
            }
            // 确定双指针，开始逼近
            let left = j + 1, right = len - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right+1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else if (sum > target){
                    right--;
                }
            }
        }
    }
    return res;
 }