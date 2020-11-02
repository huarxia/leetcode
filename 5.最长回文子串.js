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
let longestPalindrome = function(s) {
    // 如果s是空则返回空字符串
    if (!s || s.length === 0) {
        return '';
    }
    const palindromeArr = [s[0]];
    const len = s.length;
    // 第一步找出全部回文字符串，并储存起来
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                const result = isPalindrome(s.substring(i, j + 1));
                if (result) {
                    palindromeArr.push(s.substring(i, j + 1));
                }
            }
        }
    }
    // 取出最大长度即为最大回文字符串
    let maxLen = palindromeArr[0].length;
    let result = palindromeArr[0];
    palindromeArr.forEach(item => {
        if (item.length > maxLen) {
            maxLen = item.length;
            result = item;
        } 
    });
    return result;
};

const isPalindrome = (str) =>{
    let first = str;
    let last = str.split('').reverse().join('');
    return first === last;
}
// @lc code=end

