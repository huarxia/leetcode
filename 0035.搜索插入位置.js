/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.findIndex(item => item === target);
    if (index !== -1) {
        return index;
    }
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (target <= nums[i]) {
            index = i;
            break;
        }
    }
    return index === -1 ? len : index;
};
// @lc code=end

