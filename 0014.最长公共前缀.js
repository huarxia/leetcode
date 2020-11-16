/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return '';
    }
    // 先找出最短串
    let minimumStr = strs.sort((a, b) => a.length - b.length)[0];
    let str = '';
    while (minimumStr.length) {
        if (strs.every(item => item.indexOf(minimumStr) === 0)) {
            str = minimumStr;
            minimumStr = '';
        }
        minimumStr = minimumStr.substring(0, minimumStr.length - 1);
    }
    return str;
};
// @lc code=end

