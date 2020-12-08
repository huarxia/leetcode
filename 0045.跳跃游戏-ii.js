/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let curr = 0; // 当前位置
    let next = 0; // 跳跃后的位置
    let stepNum = 0; // 跳跃次数
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        // 跳一次的最远跳跃距离 = 当前位置 + 可跳跃的最大数
        next = Math.max(next, i + nums[i]);
        if (curr >= len) {
            break;
        }
        if (curr === i) {
            curr = next;
            stepNum++;
        }
    }
    return stepNum;
};
// @lc code=end

