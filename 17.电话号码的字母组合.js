/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const len = digits.length;
    if (digits == null || len === 0) {
        return [];
    }
    // 给出数字对应字母集合
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const res = [];
    // 递归
    const run = (str, index) => {
        // 当 index 等于 原始字符串时，说明当前分支已经组合完毕
        // 可以结束递归了
        if (index === len) {
            res.push(str);
            return;
        }
        // 获取当前数字对应字母集合
        let strMap = map[digits[index]];
        // 当前字母集合中的每一个元素和上层递归中生成的更多的字符组合
        for (const s of strMap) {
            // 需要加入组合的位置向后移动
            run(str + s, index + 1);
        }
    }
    // 从字符串第一个位置开始组合
    run('', 0);
    return res;
};
// @lc code=end

