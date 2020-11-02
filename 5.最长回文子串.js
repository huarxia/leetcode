/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === "") {
        return "";
    }
    let cell = [], maxLen = 0, maxEnd = 0;
    for (let i = 0; i < s.length; i++) {
        cell.push([]);
        for (let j = 0; j < s.length; j++) {
            let beforeIndex = s.length - 1 - i;
            if (s[beforeIndex] === s[j]) {
                if (i === 0 || j === 0) {
                    cell[i][j] = 1;
                } else {
                    cell[i][j] = cell[i - 1][j - 1] + 1;
                }
            } else {
                cell[i][j] = 0; // 不能省略，用于「占坑」
            }
            if (cell[i][j] > maxLen) {
                let firstIndex = j - cell[i][j] + 1;
                if (beforeIndex === firstIndex) {
                    maxLen = cell[i][j];
                    maxEnd = j;
                }
            }
        }
    }
    return s.slice(maxEnd + 1 - maxLen, maxEnd + 1)
};
// @lc code=end

