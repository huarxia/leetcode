/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const max = 2 ** 31 - 1;
    const min = -(2 ** 31);
    if (dividend === 0 || divisor === 0) {
        return 0;
    }
    // 确定符号
    let symbol = 1;
    if (dividend >= 0 && divisor >= 0
        || dividend < 0 && divisor < 0) {
        symbol = 1;
    } else {
        symbol = -1;
    }
    dividend = Math.abs(dividend); 
    divisor = Math.abs(divisor); 
    let num = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        num++;
    }
    num = symbol > 0 ? num : -num
    if (num > max) {
        return max;
    } else if (num < min) {
        return min;
    }
    return num;
};
// @lc code=end

