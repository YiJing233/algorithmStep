
/**
 * 
 * @param {number[]} nums 
 * 
 * 冒泡排序，进行了优化，已经排序的不用继续比较，但复杂度依旧是O(n^2)
 */
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
				for (let j = 0; j < nums.length - 1 - i; j++) {
          if (nums[j] > nums[j+1]) {
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
          }
        }
    }
}

/**
 * 
 * @param {number[]} nums 
 * 
 *  选择排序，遍历一遍，记录最小的值，与遍历的第一个值进行交换 O(n^2)
 */
function selectSort (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        var min = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
}

/**
 * 
 * @param {number[]} nums 
 * 
 * 插入排序，已经遍历过的序列是已经排序成功的序列，当遇到一个新的数比这个序列中的右边界值（这个肯定是最大）小，
 * 说明要将之插入进序列中，依次比较大小，给这个数字留个位置，然后插入
 */
function insertSort (nums) {
    for (let i = 0; i < nums.length; i++) {
        var j = i;  // j代表着序列中留出用于交换的空位index
        var tem = nums[i]; // tem保存遍历到的数字
        while(j > 0 && nums[j-1] > tem) {
            nums[j] = nums[j-1];
            j--;
        }
        nums[j] = tem;
    }
}

/**
 * 
 * @param {numeber[]} nums 
 * 归并排序，疯狂递归 归并排序的时间复杂度是 O(nlog(n))。
 */
function mergeSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    var mid = Math.floor(nums.length /2);

    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid, nums.length));

    return merge(left, right);

    function merge(arr1, arr2) {
        let p1 = 0;
        let p2 = 0; 
        let res = []
        while (p1 < arr1.length && p2 < arr2.length ) {
            if (arr1[p1] < arr2[p2]) {
                res.push(arr1[p1]);
                p1++;
            } else {
                res.push(arr2[p2]);
                p2++;
            }
        }
        if (p1 < arr1.length) {
            return res.concat(arr1.slice(p1));
        }
        if (p2 < arr2.length) {
            return res.concat(arr2.slice(p2));
        }

        return res;
    }
}

/**
 * 
 * @param {number[]} nums 
 * @param {int} left 
 * @param {int} right 
 * @param {int} next_pri 
 */
function quickSort(nums, left = 0, right = nums.length - 1) {
    if (nums.length > 1) {
        let next_pivot = getPivot(nums, left, right);
        
        if (left < next_pivot -1) {
            quickSort(nums, left, next_pivot-1);
        }
        
        if (next_pivot < right) {
            quickSort(nums, next_pivot, right);
        }
    }
    return nums;

    function getPivot(nums, left, right) {
        let pivot = nums[Math.floor(left + (right-left)/2)];
        let L = left;
        let R = right;

       while(L <= R) {
            while (nums[L] < pivot) {
                L++;
            }

            while (nums[R] > pivot) {
                R--;
            }
            
            if (L <= R) {
                [nums[L], nums[R]] = [nums[R], nums[L]];
                L++;
                R--;
            }
       }
       return L;
    }
}