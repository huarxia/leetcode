/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 定义出罗马对应数字
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    // 利用js Object.entries(map) 转换成: [['M', 1000], ['CM': 900]] 这样格式
    // 这是一个知识点
    // 再利用数组reduce方法累加
    return Object.entries(map).reduce((resut, [letter, n]) => {
        // letter.repeat 字符循环几次
        resut += letter.repeat(Math.floor(num / n));
        num %= n;
        return resut;
    }, '');
};
// @lc code=end

