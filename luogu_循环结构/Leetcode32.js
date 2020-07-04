// 32. 最长有效括号

// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

// 示例 1:

// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"

// 示例 2:

// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"




/**
* @param {string} s
* @return {number}
* 栈做法，保存括号，栈空意味着一次完全的匹配，计算索引差作为长度，保持最大值更新
*/
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const stack = [-1];
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c == '(') {
        stack.push(i);
        continue;
      }
      stack.pop();
      if (stack.length == 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
    return maxLen;
  };
  

  /**
 * @param {string} s
 * @return {number}
 * 解法二： 两次遍历，正向一次反向一次，记录“（”和“）”的个数，相同时取长度为个数*2，
 *          反向时若right>left全部清零再继续
 */
var longestValidParentheses = function(s) {
    var left = 0, right = 0, maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            maxlength = Math.max(maxlength, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            maxlength = Math.max(maxlength, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }
    return maxlength;
};

/**
 * @param {string} s
 * @return {number}
 * 解法三 动态规划 定义 dp table，dp[i] 为字符串 s 0 - i 的最长有效子字符串的长度
定义 dp 方程

    当 (s[i] == ')' 时
        如果 s[i - 1] == '('，那么 dp[i] = dp[i - 2] + 2
        如果 s[i - 1] == ')'，那么还要判断 dp[i - 1]的有效子字符串之前的字符是否为'('，
        如果是，则 dp[i] = dp[i−dp[i−1]−2] + dp[i−1] + 2，
        即dp[i - 1]的有效子字符串之前的有效字符串长度 + dp[i - 1]的有效子字符串的长度 + 一对括号的长度。
        这里不用特别考虑dp[i - 1] = 0的情况，因为dp[i - 1] = 0，说明有效字符串为空字符串，空字符串也是符合要求的
 */
var longestValidParentheses = function(s) {
    let dp = new Array(s.length).fill(0), ans = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = i > 1 ? dp[i - 2] + 2 : 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = ((i - dp[i - 1] - 2) >= 0 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2;
            }
        }
        ans = Math.max(ans, dp[i])
    }
    return ans;
};
