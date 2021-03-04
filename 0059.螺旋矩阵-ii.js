/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 填充 n*n 每个元素为0的二维数组
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0;
    let left = 0;
    let bottom = n - 1;
    let right = n - 1;
    let num = 1;
    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
    return matrix;
};
// @lc code=end

