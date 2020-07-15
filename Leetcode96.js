//96. 不同的二叉搜索树

//给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

//示例:

//输入: 3
//输出: 5
//解释:
//给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

//   1         3     3      2      1
//    \       /     /      / \      \
//     3     2     1      1   3      2
//    /     /       \                 \
//   2     1         2                 3


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n == 0) return 0;
 let dp = new Array(n+1).fill(Number('0'));
 dp[0] = 1;
 dp[1] = 1;
 dp[2] = 2;

var i = 3;
 while (i <= n) {
     var j = 1;
     while(j <= i){
        dp[i] += dp[j-1] * dp[i-j];
        j++;
     }
    i++;
 }
 return dp[n];
};