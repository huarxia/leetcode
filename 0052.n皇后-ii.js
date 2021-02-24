/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 回溯
var totalNQueens = function(n) {
    var res = [];
    var curr = [];
    // 这样创建引用数据类型会使所有数组相同引用
    // var curr = new Array(n).fill(new Array(n).fill('.'));
    // 临时储存其中一个结果
    for(var i = 0; i < n; i++){
       curr[i] = new Array();
        for(var j = 0; j < n; j++){
            curr[i][j] = '.';
        }
    }
    backtrack(curr, res, 0);
    return res.length;
};
var backtrack = function(curr, res, row) {
    if(curr.length === row){
        var c = [];
        for(var i = 0; i < curr.length; i++) {
            c.push(curr[i].join(''));
        }
        res.push(c);
        return;
    }
    // 遍历每一行所有元素
    for(var col = 0; col < curr.length; col++) {
        // 判断该位置是否有效
        if(isValid(row, col, curr)) {
            curr[row][col] = 'Q';
            backtrack(curr, res, row + 1);
            curr[row][col] = '.';
        }
    }
    
};
var isValid = function(row, col, curr) {
    for(var i = 0; i < row; i++)
        // 列
        if(curr[i][col] === 'Q') return false;
    for(var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        // 对角线
        if(curr[i][j] === 'Q') return false;
        // 斜对角线
    for(var i = row - 1, j = col + 1; i >= 0 && j < curr.length; i--,j++) {
        if(curr[i][j] === 'Q') return false;
    }
    return true;
    
};
// @lc code=end

