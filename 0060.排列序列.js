/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const res = [];
    const backtrack = (path) => {
        // 递归的出口
        if (path.length === n) {
            res.push(path);
            return;
        }
        // 搜索
        for (let num = 1; num <= n; num++) {
            const char = num.toString();
            if (path.includes(char)) {
                continue;
            }
            backtrack(path + char);
        }
    };
    backtrack('');
    return res[k - 1];
};
// @lc code=end

