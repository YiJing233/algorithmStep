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