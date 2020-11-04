/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length;
    // 如果字符长度小于小于行数或者传入行数为1则直接返回即可
    if (numRows === 1 || len < numRows) {
        return s;
    }
    /**
     *  L     D     R
        E   O E   I I
        E C   I H   N
        T     S     G
     */
    // 1. 先分析出多少个元素一次循环
    // 2. 可以看到，每次次循环时候，只有首尾是一个元素，其他行都是两个元素
    // 3. 所以: 2 * (numRows - 2) + 2 ==> 2 * numRows -2 ===> loopNum
    // 以4行为例得到 loopNum = 6 这个个数值表示多少个元素后循环往下排
    // 4. 再次分析，每个元素应该放在哪个数组中，嘻嘻~~
    // 5. 以第二列 C 为例 下标为 4, 但是应该放在下标为 2 的数组中
    // 那么：4 % 6 = 4， 6 - 4 = 2；
    // 6. 验证： 第6列I   11 % 6 = 5， 6 - 11 % 6 = 1
    // 7. 嘻嘻: 所以 ===>
    // 放置数组下标 = min(下标 % loopNum, loopNum - (下标 % loopNum));
    // 生成一个长度为numRows的数组，每个数组中元素存放每行的数据拼接
    const arr = new Array(numRows).fill('');
    // 循环元素个数
    const loopNum = 2 * numRows - 2;
    for (let i = 0; i < len; i++) {
        // 获取放置数组的下标
        const index = Math.min(i % loopNum, loopNum - i % loopNum);
        // 每一行的字符连接起来
        arr[index] += s[i];
    }
    // 直接转换为字符串返回即可
    return arr.join('');
};
// @lc code=end

