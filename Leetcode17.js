// 17. 电话号码的字母组合

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if (!digits) return[];
    let dic = new Map();
    dic.set('2', 'abc');
    dic.set('3', 'def');
    dic.set('4', 'ghi');
    dic.set('5', 'jkl');
    dic.set('6', 'mno');
    dic.set('7', 'pqrs');
    dic.set('8', 'tuv');
    dic.set('9', 'wxyz'); 

    let res = new Array();

    let tem = new Array();
    // for(let i = 0; i < digits.length; i++) {
    //     let string = dic.get(i);
    //     if (string) {

    //     } else {
    //         return [];
    //     }
    // }
    dfs(0, digits, res, tem, dic);
    return res;   
};

function dfs (i, digits, res, tem, dic) {
    var string = dic.get(digits[i]);
    if(string.length > 0) {
        for (let j = 0; j < string.length; j++) {
        // if (tem.length == 0 && ) continue;
        tem.push(string[j]);
        if (tem.length == digits.length) {
            res.push(tem.toString().split(',').join(''));  
        } else {
            dfs(i + 1, digits, res, tem, dic);
        }
        tem.pop();
        }
    } else {
        return;
    } 

}