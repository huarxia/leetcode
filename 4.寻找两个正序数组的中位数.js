/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let tempArr = nums1.concat(nums2);
    // 去重
    // tempArr = Array.from(new Set(tempArr));
    // 排序
    tempArr = tempArr.sort((item1, item2) => item1 - item2);
    const len = tempArr.length;
    if (len === 0) {
        return 0;
    } else if (len % 2 === 1) {
        const index = (len + 1) / 2 - 1;
        return tempArr[index];
    } else {
        const index1 = len / 2 - 1;
        const index2 = len / 2;
        return (tempArr[index1] + tempArr[index2]) / 2;
    }
};
 // @lc code=end

