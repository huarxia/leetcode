/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 1️⃣ 直接内置方法？
    // return nums.indexOf(target);
    // 2️⃣ 二分查找法
    const len = nums.length;
    // if (len === 0) {
    //     return -1;
    // }
    let start = 0;
    let end = len - 1;
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (target === nums[mid]) {
            return mid;
        }
        // target 在 [start, mid] 之间
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            // target 在 [mid, end] 之间
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

