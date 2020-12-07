/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let L1 = num1.length;
    let L2 = num2.length;
    let rs = new Array(L1 + L2);
    for (let i = L1 - 1; i >= 0; i--) {
        for (let j = L2 - 1; j >= 0; j--) {
            let s = num2[j] * num1[i];
            let index = i + j + 1;
            rs[index] = rs[index] || 0;
            rs[index] += s;
        }
    }
    rs[0] = 0;
    for (let i = rs.length; i >= 1; i--) {
        if (rs[i] >= 10) {
            rs[i - 1] += Math.trunc(rs[i] / 10);
            rs[i] = rs[i] % 10;
        }
    }
    if (!rs[0]) {
        rs.shift();
    }
    return rs.join('');
};
// @lc code=end

