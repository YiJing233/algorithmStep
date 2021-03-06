// 面试题16. 数值的整数次方

// 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。
// 示例 1:

// 输入: 2.00000, 10
// 输出: 1024.00000

// 示例 2:

// 输入: 2.10000, 3
// 输出: 9.26100

// 示例 3:

// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2-2 = 1/22 = 1/4 = 0.25

 

// 说明:

//     -100.0 < x < 100.0
//     n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

class Solution {
    public double myPow(double x, int n) {
        if(n == 0) return 1;
        if(n == 1) return x;
        if(n == -1) return 1 / x;

        double half = myPow(x, n/2);
        double mod = myPow(x, n%2);
        return half * half * mod;        
    }
}
//快速幂思想

//使用折半计算，每次把n缩小一半，这样n最终会缩小到0，任何数的0次方都为1，
//这时候我们再往回乘，如果此时n是偶数，直接把上次递归得到的值算个平方返回即可，
//如果是奇数，则还需要乘上个x的值
//于n是负数的情况，我们可以先用其绝对值计算出一个结果再取其倒数即可。
//题目的重点是防止越界，所以减少除法使用
