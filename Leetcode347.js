// 347. 前 K 个高频元素

// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

 

// 提示：

//     你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
//     你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
//     题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
//     你可以按任意顺序返回答案。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 解法一 哈希表+数组（时间复杂度最优O(nlogn)），其实不符合题意
 */

 var findKFrequent = (nums, k)=>{
    let dic = new Map();
    let arr = [...new Set(nums)];
    nums.map((num)=>{
        if (dic.has(num)) dic.set(num, dic.get(num) + 1);
        else dic.set(num, 1);
    })
    return arr.sort((a, b)=>{
        return dic.get(b) - dic.get(a);
    }).slice(0, k);;
 }


 // 解法二 桶排序O(n)

 let topKFrequent = function(nums, k) {
    let map = new Map();
    let arr = [...new Set(nums)];
    nums.map((num) => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    
    // 如果元素数量小于等于 k，直接返回
    if(map.size <= k) {
        return [...map.keys()]
    }
    
    return bucketSort(map, k)
};

// 桶排序
let bucketSort = (map, k) => {
    let arr = [];
    let res = [];
    map.forEach((value, key) => {
        // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
        if(!arr[value]) {
            arr[value] = [key];
        } else {
            arr[value].push(key);
        }
    })
    // 倒序遍历获取出现频率最大的前k个数
    for(let i = arr.length - 1; i >= 0 && res.length < k; i--){
        if(arr[i]) {
            res.push(...arr[i]);
        }
	}
	return res
}

// 解法三：哈希表+堆

let topKFrequent = function(nums, k) {
    let map = new Map(), heap = [,]
    nums.map((num) => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    
    // 如果元素数量小于等于 k
    if(map.size <= k) {
        return [...map.keys()]
    }
    
    // 如果元素数量大于 k，遍历map，构建小顶堆
    let i = 0
    map.forEach((value, key) => {
        if(i < k) {
            // 取前k个建堆, 插入堆
            heap.push(key)
            // 原地建立前 k 堆
            if(i === k-1) buildHeap(heap, map, k)
        } else if(map.get(heap[1]) < value) {
            // 替换并堆化
            heap[1] = key
            // 自上而下式堆化第一个元素
            heapify(heap, map, k, 1)
        }
        i++
    })
    // 删除heap中第一个元素
    heap.shift()
    return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(heap, map, k, i)
    }
}

// 堆化
let heapify = (heap, map, k, i) => {
    // 自上而下式堆化
    while(true) {
        let minIndex = i
        if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
            minIndex = 2*i
        }
        if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
            minIndex = 2*i+1
        }
        if(minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}