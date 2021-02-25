/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
    // 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
    // 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
    // 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
    // 时间复杂度：O(n)O(n)
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
    // 精简版
    // var prev = 0;
    // var max = -Number.MAX_VALUE;
    // for (var i = 0; i < nums.length; i++) {
    //     prev = Math.max(prev + nums[i], nums[i]);
    //     max = Math.max(max, prev);
    // }
    // return max;
};
// @lc code=end

