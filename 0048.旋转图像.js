/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 旋转前
    // 00 01 02
    // 10 11 12
    // 20 21 22
    // 旋转后
    // 20 10 00
    // 21 11 01
    // 22 12 02

    // 2 3 1
    // 4 5 6
    // 7 8 9
    // 通过交换matrix[i][j], matrix[j][i] 得到
    // 1 4 7
    // 2 5 8
    // 3 6 9
    // 最后将得到每组数组倒序排列即可
    // 7 4 1
    // 8 5 2
    // 9 6 3
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] =temp;
        }
    }
    return matrix.map(item => item.reverse());
};
// @lc code=end

