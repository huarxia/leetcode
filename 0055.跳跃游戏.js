/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 这里并不是很关心每一个位置上的剩余步数
    // 而只是希望知道能否达到末尾，也就是说
    // 我们只对最远能够达到的位置感兴趣
    // 所以维护一个变量reach,表示最远能够达到的位置
    // 初始化为0，遍历数组中的每一个数字
    // 如果当前坐标大于reach或者reach
    // 已经抵达最最后一个位置则跳出循环
    // 否则就更新reach的值为其和i+nums[i]中较大的值
    // 其中i+nums[i]表示当前位置能够到达的最大位置。
    let len = nums.length;
    let reach = 0;
    for (let i = 0; i < len; i++) {
        if (i > reach || reach >= len - 1) {
            break;
        }
        reach = Math.max(reach, i + nums[i]);
    }
    return reach >= len - 1;
};
// @lc code=end

