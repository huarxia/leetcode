/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 定义出罗马对应数字
    const map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    const len = s.length;
    let result = 0;
    for (let i = 0; i < len; i += 1) {
        i < len - 1 && map[s[i]] < map[s[i + 1]]
        ? result -= map[s[i]]
        : result += map[s[i]];
    }
    return result;
};
// @lc code=end

