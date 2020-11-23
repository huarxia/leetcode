/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let count = 0;
    let index = 0;
    // 找出最后一个相邻升序，若没有则表示该元数据为降序，返回升序序列
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < nums[i+1]) {
            count++;
            index = i;
        }
    }
    if(count === 0) return nums.sort((a, b) => {
        return a - b;
    })
    // 找到该升序后面比当前位置的值大但是其他中最小的值，交换
    let min = nums[index + 1];
    let indexj = index + 1;
    for(let j = index + 1; j < nums.length; j++) {
        if(min > nums[j] && nums[j] > nums[index]) {
            min = nums[j];
            indexj = j;
        }
    }
    nums = exchange(nums, index, indexj);
    // 剩下的值排序
    for(let k = index + 1; k < nums.length; k++) {
       for(let m = k + 1; m < nums.length; m++) {
           if(nums[m] < nums[k]) {
                nums = exchange(nums, m, k);
           }
       }
    }
    return nums;
};
function exchange(nums, l, r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    return nums;
}
// @lc code=end

