/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0; // 储存结果
    const len = height.length;
    // 枚举每个柱子，查找每个柱子可以接的雨水高度
    for (let i = 0; i < len; i++) {
        let left = 0; // 保存左边界的高度
        let right = 0; // 保存右边界的高度
        // 第一步遍历时，左右边界就被赋值为桶底高度，即height[i]
        // 枚举查找左边界的最大高度
        for (let j = i; j >= 0; j--) {
            left = Math.max(left, height[j]);
        }
        // 枚举查找右边界的最大高度
        for (let k = i; k < len; k++) {
            right = Math.max(right, height[k]);
        }
        // 一个水桶的最短桶壁就是它能装的最大水高度，在这里就是左右边界的最小值。
        // height[i]即为当前水桶的底边
        // 当前水桶能装的最大水量，就是左右边界的最小值减去当前底边高度
        // 最后将当前水桶的装水量计入结果
        result += Math.min(left, right) - height[i];
    }
    return result;
};
// @lc code=end

