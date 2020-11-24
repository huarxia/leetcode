/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // 左括号的索引，入栈
        if (c == '(') {
            stack.push(i);
        } else {
            // 遍历到右括号
            // 栈顶的左括号被匹配，出栈
            stack.pop();
            // 栈未空
            if (stack.length) {
                // 计算有效连续长度
                const curMaxLen = i - stack[stack.length - 1];
                // 挑战最大值
                maxLen = Math.max(maxLen, curMaxLen);
            } else {
                // 栈空了
                // 入栈充当参照
                stack.push(i);
            }
        }
    }
    return maxLen;
};
// @lc code=end

