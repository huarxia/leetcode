/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const sLen = s.length;
    const wordLen = words[0].length;
    const wLen = words.reduce((total, item) => item.length + total, 0);
    if (sLen === 0 || wLen === 0 || sLen < wLen) {
        return [];
    }
    let ans = [];
    let wordMap = {};
    for (let w of words) {
        wordMap[w] ? wordMap[w]++ :wordMap[w] = 1
    }
    for (let i = 0; i < sLen - wLen + 1; i++) {
        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + wLen - wordLen + 1; j += wordLen) {
            let w = s.slice(j, j + wordLen);
            if (wm[w]) {
                wm[w]--
            } else {
                break;
            }
        }
        if (Object.values(wm).every(n => n === 0)) ans.push(i);
    }
    return ans;
};
// @lc code=end

