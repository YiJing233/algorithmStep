def SelectionSort(nums:list):
    n = len(nums)
    for i in range(n):
        for j in range(i,n):
            if(nums[i] > nums[j]):
                nums[i],nums[j] = nums[j],nums[i]
    return nums

#O(n^2) 不稳定内排序

def bubbleSort(nums:list):
    n = len(nums)
    for c in range(n):
        for i in range(1,n-c):
            if(nums[i-1] > nums[i]):
                nums[i],nums[i-1] = nums[i-1],nums[i]
    return nums

#O(n^2) 稳定内排序

def insertSort(nums:list):
    n = len(nums)
    for i in range(1,n):
        while(i>0 and nums[i-1] > nums[i]):
            nums[i-1],nums[i] = nums[i],nums[i-1]
    return nums

#O(n^2) 稳定内排序

def shellSort(nums:list):
    n = len(nums)
    gap = n // 2
    while gap:
        for i in range(gap,n):
            while (i-gap >= 0 and nums[i-gap] > nums[i]):
                nums[i-gap],nums[i] = nums[i],nums[i-gap]
                i -= gap
        gap //= 2
    return nums

#下界是n*log2n 中等规模表现较好 在最坏的情况下和平均情况下执行效率相差不是很多
# 平均O(nlogn) 最坏O(n^2) 非稳定内排序

def MergeSort(nums:list):
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left = MergeSort(nums[:mid])
    right = MergeSort(nums[mid:])
    return merge(left,right)

    def merge(left,right):
        res = []
        i = 0
        j = 0
        while(i < len(left) and j < len(right)):
            if left[i] <= riht[i]:
                res.append(left[i])
                i += 1
            else:
                res.append(right[i])
                j += 1
        
        res += left[i:]
        res += right[j:]
        return res

# O(nlogn) 稳定外排序

def quickSort(nums:list):
    n = len(nums)

    def quick(left,right):
        if left >= right:
            return nums
        pivot = left
        i = left
        j = right
        while(i < j):
            while(i < j and nums[j] > nums[pivot]):
                j -= 1
            while(i < j and nums[i] <= nums[pivot]):
                i += 1
            nums[i],nums[j] = nums[j],nums[i]
        nums[pivot],nums[j] = nums[j],nums[pivot]
        quick(left,j-1)
        quick(j+1,right)
        return nums

    return  quick(0,n-1)

#不稳定内排序，时间复杂度度O(nlogn)

def heapSort(nums:list):
    n = len(nums)

    def adjust_heap_recur(nums,startpos,endpos):
        pos = startpos
        childpos = pos * 2 +1
        if childpos < endpos:
            rightpos = childpos + 1
            if rightpos < endpos and nums[rightpos] > nums[childpos]:
                childpos = rightpos
            if nums[childpos] > nums[pos]:
                nums[pos],nums[childpos] = nums[childpos],nums[pos]
                adjust_heap_recur(nums,pos,endpos)

        def adjust_heap_norecur(nums, startpos, endpos):
            newitem = nums[startpos]
            pos = startpos
            childpos = pos * 2 + 1
            while childpos < endpos:
                rightpos = childpos + 1
                if rightpos < endpos and nums[rightpos] >= nums[childpos]:
                    childpos = rightpos
                if newitem < nums[childpos]:
                    nums[pos] = nums[childpos]
                    pos = childpos
                    childpos = pos * 2 + 1
                else:
                    break
            nums[pos] = newitem

#创建堆
    for i in reversed(range(n//2)):
        adjust_heap_recur(nums,i,n)
#调整堆
    for i in range(n-1,-1,-1):
        nums[0],nums[i] = nums[i],nums[0]
        adjust_heap_recur(nums,0,i)
    return nums

#不稳定排序，内排序，时间复杂度为O(nlogn)

def countSort(nums:list):
    if not nums: return[]
    n = len(nums)
    _min = min(nums)
    _max = max(nums)
    tmp_arr = [0] * (_max - _min + 1)
    for num in nums:
        tmp_arr[num - _min] += 1
    j = 0
    for i in range(n):
        while tmp_arr[j] == 0:
            j += 1
        nums[i] = j + _min
        tmp_arr[j] -= 1
    return nums

# 稳定外排序，时间复杂度O(n+k)，
# 但是对于数据范围很大的数组，需要大量时间和内存。
# 典型以空间换时间的算法

def bucketSort(nums:list,bucketSize:int):
    if len(nums) < 2:
        return nums
    _min = min(nums)
    _max = max(nums)
    # 需要桶个数
    bucketNum = (_max - _min) // bucketSize + 1
    buckets = [[] for _ in range(bucketNum)]
    for num in nums:
        # 放入相应的桶中
        buckets[(num - _min) // bucketSize].append(num)
    res = []

    for bucket in buckets:
        if not bucket: continue
        if bucketSize == 1:
            res.extend(bucket)
        else:
            # 当都装在一个桶里,说明桶容量大了
            if bucketNum == 1:
                bucketSize -= 1
            res.extend(bucket_sort(bucket, bucketSize))
    return res

#稳定外排序，时间复杂度O(n+k)，k为桶的个数

def Radix_sort(nums):
    if not nums: return []
    _max = max(nums)
    # 最大位数
    maxDigit = len(str(_max))
    bucketList = [[] for _ in range(10)]
    # 从低位开始排序
    div, mod = 1, 10
    for i in range(maxDigit):
        for num in nums:
            bucketList[num % mod // div].append(num)
        div *= 10
        mod *= 10
        idx = 0
        for j in range(10):
            for item in bucketList[j]:
                nums[idx] = item
                idx += 1
            bucketList[j] = []
    return nums

# 稳定外排序，时间复杂度 posCount∗(n+n)
# 其中 posCount 为数组中最大元素的最高位数
# 简化下得：O(k*n)；其中k为常数，n为元素个数。