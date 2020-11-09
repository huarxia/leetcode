/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    if (nums === null || len < 3) {
        return [];
    }
    // 先从小到大排序
    nums = nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < len - 2; i++) {
        // 排除重复的
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        // 不能提到外面，每次要重新赋值
        let k = len - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([ nums[i], nums[j], nums[k]]);
                j++;
                // 如果有相同的则跳过
                while (nums[j - 1] === nums[j]) {
                    j++;
                }
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};
// @lc code=end

