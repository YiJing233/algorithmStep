#15. 三数之和

#给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

#注意：答案中不可以包含重复的三元组。

 

#示例：

#给定数组 nums = [-1, 0, 1, 2, -1, -4]，

#满足要求的三元组集合为：
#[
  #[-1, 0, 1],
  #[-1, -1, 2]
#]



# 哈希表法
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        inres = []
        res = []
        hasmap = {}
        nums.sort()
        if len(nums) < 3:
            return []
        #把整个nums变成字典
        #利用字典查找时间复杂度为o(1)的性质，用于后续查找是否有等于两数之和相反数的值
        for ind,numb in enumerate(nums):
            hasmap[numb] = ind
        #i从第一位开始遍历到倒数第二位
        for i in range(len(nums) - 2):
        #如果第一个数的当前值大于0了，后面的肯定都是正数，不可能有等于0的解了
            if nums[i] > 0:
                break
            else:
        #利用已排序好的性质，去除重复解
                if i>=1 and nums[i] == nums[i-1]:
                    continue
                else:
                    for j  in range(i+1,len(nums)):
        #同上，判断条件用于去除重复解
                            if j >= i+2 and nums[j] ==nums[j-1]:
                                continue
                            else:
                                add2 = nums[i] + nums[j]
        #在字典中查找有无与前两个数的和相反的数，如果有并且下标比第二个数的下标大，说明这个数在未遍历过的后半部分，把这个解加入到最终解当中
                                if -(add2) in hasmap:
                                    temp_loc = hasmap.get(-add2)
                                    if temp_loc > j:
                                        inres = [nums[i],nums[j],-(add2)]
                                        res.append(inres)
        return res



# 双指针法
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n=len(nums)
        res=[]
        if(not nums or n<3):#剪枝
            return []
        nums.sort()#排序后保证不会有重复解
        res=[]

        for i in range(n):
            if(nums[i]>0):
                return res
            if(i>0 and nums[i]==nums[i-1]):
                continue#第二位数字，剪枝（剪去重复的数字）
            L=i+1
            R=n-1

            while(L<R):#双指针指数组两边
                if(nums[i]+nums[L]+nums[R]==0):
                    res.append([nums[i],nums[L],nums[R]])#一个解
                    while(L<R and nums[L]==nums[L+1]):#还是剪去重复枝
                        L=L+1
                    while(L<R and nums[R]==nums[R-1]):
                        R=R-1
                    L=L+1
                    R=R-1
                elif(nums[i]+nums[L]+nums[R]>0):#有序数组，偏大就右指针（大的按个）左移
                    R=R-1
                else:#偏小就左指针右移一位
                    L=L+1
        return res