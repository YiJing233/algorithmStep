// 214. 最短回文串

// 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

// 示例 1:

// 输入: "aacecaaa"
// 输出: "aaacecaaa"

// 示例 2:

// 输入: "abcd"
// 输出: "dcbabcd"


/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let len = s.length;
    if (len == 0) return "";
    let res = s.split("").reverse().join("");
    var i = 0;
    while(1) {
        if (res.slice(i) == s.slice(0, len-i)) break;
        i++;
    }
    return res.slice(0, i) + s;
};
