//51. N皇后

//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

//上图为 8 皇后问题的一种解法。

//给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

//每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

//示例:

//输入: 4
//输出: [
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],

// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
//解释: 4 皇后问题存在两个不同的解法。

 

//提示：

//    皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）



/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const rets = [];
    for (let col = 1; col <= n; col++) {
        arrange([col]);
    }
    function arrange(ret) {
        const row = ret.length + 1;
        if (row > n) {
        rets.push(ret);
        return;
    }
    for (let col = 1; col <= n; col++) {
        let flag = true;
        for (let row_ = 1; row_ < row; row_++) {
        if (ret[row_ - 1] === col) {
            flag = false;
            break;
        }
        if (row - row_ === Math.abs(col - ret[row_ - 1])) {
            flag = false;
            break;
        }
        }
        if (flag) {
            ret[row - 1] = col;
            arrange([...ret]);
        }
    }
}
    return rets.map((ret) => {
        return ret.map((col) => {
            const charArr = new Array(n).fill(".");
            charArr[col - 1] = "Q";
            return charArr.join("");
    });
    });
};