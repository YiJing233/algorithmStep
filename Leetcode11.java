//11. 盛最多水的容器

//给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

//说明：你不能倾斜容器，且 n 的值至少为 2。

 

//图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 

//示例：

//输入：[1,8,6,2,5,4,8,3,7]
//输出：49

// 解法一：暴力解法，计算每两个柱子的面积值，并不断更新最大值
class Solution {
    public int maxArea(int[] height) {
        int area = 0;
        for (int i = height.length -1 ; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                area = Math.max(area, (i-j) * (height[i] > height[j] ? height[j] : height[i]));
            }
        }
        return area;
    }
}

//  优化了一下， 好像是三目运算符在一种情况下效率不高，优化后的算法
// 执行用时减少了一半

class Solution {
    public int maxArea(int[] height) {
        int area = 0;
        for (int i = 0 ; i < height.length; i++) {
            for (int j = i + 1; j < height.length; ++j) {
                int max = (j - i) * Math.min(height[i], height[j]);
                area = Math.max(area, max);
            }
        }
        return area;
    }
}

// 左右指针，都在两个最远边界，向内逐渐收敛，比较height，
// 如果更矮，那不可能比最远边界面积大，因为最远边界距离最宽，
// 向内收敛宽度减小，更矮高度也减小，长宽都更小面积自然更小

class Solution {
    public int maxArea(int[] height) {
        int area = 0;
        for (int i = 0, j = height.length -1; i < j; ) {
            int minHeight = height[i] < height[j] ? height[i++] : height[j--];
            int tem = (j-i+1) * minHeight;
            area = Math.max(tem, area);
        }
        return area;
    }
}