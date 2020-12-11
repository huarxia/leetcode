/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 1. 设置结果集
    let result = [];
    // 2. 回溯
    const recursion = (arr, set) => {
        // 2.1 设置回溯终止条件
        if (arr.length === nums.length) {
            // 2.1.1 推入结果集
            result.push(arr.slice());
            // 2.1.2 终止递归
            return;
        }
        // 2.2 遍历数组
        for (let i = 0; i < nums.length; i++) {
            // 2.2.1 必须是不存在 set 中的坐标
            if (!set.has(i)) {
                // 2.2.2 本地递归条件（用完记得删除）
                arr.push(nums[i]);
                set.add(i);
                // 2.2.3 进一步递归
                recursion(arr, set);
                // 2.2.4 回溯：撤回 2.2.2 的操作
                arr.pop();
                set.delete(i);
            }
        }
    };
    recursion([], new Set());
    result = result.map(item => item.toString());
    result = Array.from(new Set(result));
    result = result.map(item => item.split(','));
    // 3. 返回结果
    return result;
};
// @lc code=end

