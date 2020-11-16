/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const len = nums.length;
    if (nums === null || len <3) {
        return '';
    }
    // 先从小到大排序
    nums = nums.sort((a, b) => a - b);
    let res = target - (nums[0] + nums[1] + nums[2]);
    for (let i = 0; i < len - 2; i++) {
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                ++left;
            } else {
                --right;
            }
            if (Math.abs(sum - target) < Math.abs(res)) {
                res = target - sum;
            }
        }
    }
    return target - res;
};
// @lc code=end

