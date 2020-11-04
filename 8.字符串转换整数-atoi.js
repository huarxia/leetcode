/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//     const border = 2**31;
//     const max = border - 1;
//     const min = -border;
//     const num = parseInt(s, 10);
//     if (isNaN(num)) {
//         return 0;
//     }
//     if (num < min) {
//         return min;
//     }
//     if (num > max) {
//         return max;
//     }
//     return num;
// };

// 一行代码简化
var myAtoi = function(s) {
    return (border = 2 ** 31) && Math.min(Math.max(parseInt(s, 10) || 0, -border), border - 1);
};
// @lc code=end

