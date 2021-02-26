/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const LEN = intervals.length;
    // 如果数组的长度小于等于1
    if (LEN <= 1) {
        return intervals;
    }
    // 创建结果合并数组
    let res = [];
    // 进行首位排序
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    // 放入目标数组第一个元素
    res.push(intervals[0]);
    for (let i = 1; i < LEN; i++) {
        // 如果当前元素左侧数大于合并数组最后一个元素右侧
        // 说明不需要合并直接push
        if (intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i]);
        } else {
            // 否则需要合并
            // 如果当前数组右侧端点大于待合并数组右侧端点，则更新
            if (intervals[i][1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = intervals[i][1];
            }
        }
    }
    return res;
};
// @lc code=end

