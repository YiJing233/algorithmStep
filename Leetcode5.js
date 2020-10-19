// 5. 最长回文子串

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s == null || s.length == 0) return "";
    let start = 0,
        end = 0;
    const dfs = (str, left, right) => {
        while (left >= 0 && right <= str.length && str[left] == str[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };
    for (let i = 0; i < s.length; i++) {
        let len1 = dfs(s, i, i),
            len2 = dfs(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.slice(start, end-1);
}