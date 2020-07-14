// 120. 三角形最小路径和

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

 

// 例如，给定三角形：

// [
     // [2],
    // [3,4],
   // [6,5,7],
  // [4,1,8,3]
// ]

// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

 

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp  = [].concat(triangle[triangle.length-1]);
    // console.log(dp);
    for (let i = triangle.length-2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = triangle[i][j] + (Math.min(dp[j], dp[j+1]));
        }
      dp.pop();
                //   console.log(dp);
    }
    return dp[0];
};