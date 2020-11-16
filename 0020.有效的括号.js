/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length;
    if (len === 0 || len % 2 !== 0) {
        return false;
    }
    // 1️⃣ 正则匹配
    // while (s.length) {
    //     const temp = s;
    //     s = s.replace('()', '');
    //     s = s.replace('[]', '');
    //     s = s.replace('{}', '');
    //     if (s === temp) {
    //         return false;
    //     } 
    // }
    // return true;

    // 2️⃣ 循环比对
    let stack = [];
    const strMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    strMapKeys = Object.keys(strMap);
    for (let i = 0; i < len; i++) {
        if (strMapKeys.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        } else {
            if (s[i] !== strMap[stack.pop()]) {
                return false;
            }
        }
    }
    return !stack.length;
};
// @lc code=end

