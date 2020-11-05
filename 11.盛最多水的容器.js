/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length;
    if (len <= 0) {
        return 0;
    }
    // 其实就是找到最长的两根柱子
    // 那么使用夹逼方法获取和即可
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i < j) {
        max = Math.max(
            max,
            (j - i)
            * (height[i] < height[j]
                ? height[i++]
                : height[j--])
        );
    }
    return max;
};
// @lc code=end
