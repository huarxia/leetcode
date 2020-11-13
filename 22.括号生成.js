/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function go(l, r, str) {
        if (l > r) {
            return;
        }
        if (l === 0 && r === 0) {
            res.push(str);
            return;
        }
        if (l > 0) {
            go(l - 1, r, str + '(');
        }
        if (r > 0) {
            go(l, r - 1, str + ')');
        }
    }
    go(n, n, '');
    return res;
};
// @lc code=end

