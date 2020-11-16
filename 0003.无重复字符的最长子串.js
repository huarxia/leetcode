/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = '';
    let res = 0;
    let len = 0;
    const LEN = s.length;
    for (let i = 0; i < LEN; i++) {
        let index = str.indexOf(s[i]);
        if (index === -1) {
            str += s[i];
        } else {
            str = str.slice(index + 1) + s[i];
        }
        len = str.length;
        res = res < len ? len : res;
    }
    return res;
};
// @lc code=end

