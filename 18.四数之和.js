/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @description
 * 去重函数
 * 判断当前加入数组的元素是否与数组中的元素重复
 * @param {*} arr 查找的数组(有序)
 * @param {*} item  当前要插入数组的元素(有序)
 */
function removeDup(arr, item) {
    let itemStr = item.toString();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString() === itemStr) {
            return false;
        }
    }
    return true;
}
var fourSum = function(nums, target) {
    const len = nums.length;
    if (nums === null || len < 4) {
        return [];
    }
    // 1. 从小到大排序
    nums.sort((a, b) => a - b);
    // 1️⃣ 暴力四重循环
    // const res = [];
    // for (let i = 0; i < len - 3; i++) {
    //     for (let j = i + 1; j < len - 2; j++) {
    //         for (let k = j + 1; k < len - 1; k++) {
    //             for (let m = k + 1; m < len; m++) {
    //                 if (nums[i] + nums[j] + nums[k] + nums[m] === target
    //                     && removeDup(res, [
    //                     nums[i], 
    //                     nums[j], 
    //                     nums[k], 
    //                     nums[m]
    //                 ])) {
    //                     res.push([
    //                         nums[i], 
    //                         nums[j], 
    //                         nums[k], 
    //                         nums[m]
    //                     ]);
    //                 }
    //             }
    //         }
    //     }
    // }
    // return res;
    // 2️⃣ 双指针
    const res = [];
    for (let i = 0; i < len - 3; i++) {
        // 排除重复的
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            // 除去重复情况
            if (res.length > 0) {
                const res0 = res[res.length - 1][0];
                const res1 = res[res.length - 1][1];
                if(res0 === nums[i] && res1 === nums[j]) {
                    continue;
                }
            }
            let m = j + 1;
            let n = len - 1;
            while (m < n) {
                const sum = nums[i] + nums[j] + nums[m] + nums[n];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[m], nums[n]]);
                    m++;
                    // 如果有相同的则跳过
                    while (nums[m - 1] === nums[m]) {
                        m++;
                    }
                } else if (sum < target) {
                    m++;
                } else {
                    n--;
                }
            }
        }
    }
    return res;
};
// @lc code=end

