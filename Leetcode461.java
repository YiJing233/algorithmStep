// 461. 汉明距离

// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// 注意：
// 0 ≤ x, y < 231.

// 示例:

// 输入: x = 1, y = 4

// 输出: 2

// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// 上面的箭头指出了对应二进制位不同的位置。

class Solution {
    public int hammingDistance(int x, int y) {
        int z = x ^ y;
        int sum = 0;
        while(z) {
            sum += z & 1;
            z = z>>1;
        }
        return sum;
    }
}

// ^运算符是异或运算，通过位运算计数

//JDK中类的写法:

class Solution {
    public:
        int hammingDistance(int x, int y) {
            uint32_t z = x ^ y;
            z = (z & 0x55555555) + ((z >> 1) & 0x55555555);
            z = (z & 0x33333333) + ((z >> 2) & 0x33333333);
            z = (z & 0x0f0f0f0f) + ((z >> 4) & 0x0f0f0f0f);
            z = (z & 0x00ff00ff) + ((z >> 8) & 0x00ff00ff);
            z = (z & 0x0000ffff) + ((z >> 16) & 0x0000ffff);
            return (int)z;
        }
    };
//一位变两位累加，然后2位变4位，4位变8位，8位变16位，最后16位变32位。其实是个加法运算
//对bit位做并行运算