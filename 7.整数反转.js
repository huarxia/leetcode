/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const border = 2**31;
    const max = border - 1;
    const min = -border;
    // 直接反转，该正正，该负负
    const result = (x > 0 ? 1 : -1) * (x + '')
                    .split('')
                    .filter(s => s !== '-')
                    .reverse()
                    .join('');
    return result > max || result < min ? 0 : result;
};
// @lc code=end

