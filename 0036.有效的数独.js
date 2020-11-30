/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 步骤一，设置三元素：
    // rows：存放 1-9 横排的值 j
    // columns：存放 1-9 纵排的值 i
    // boxes：存放 1-9 小盒子的值
    // 以上均设置为 Set
    
    // 步骤二，顺序遍历存放值：
    
    // 通过双重 for 遍历。
    // rows[i] 存放对应横坐标的值。
    // columns[j] 存放对应纵坐标的值。
    // boxes[?] 存放对应小盒子的值。
    // 那么小盒子的值怎么判断呢，? 要怎么填充？

    // 步骤三，确定问号：
    // 仅存在 3 * 9 宫格的时候：
    // 0/1/2 归为 boxes[0]
    // 3/4/5 归为 boxes[1]
    // 6/7/8 归为 boxes[2]
    // 那么可以得到：Math.floor(j / 3)。

    // 此刻：
    // +0	0	1	2
    // +3	3	4	5
    // +6	6	7	8
    // 假设我们确定了第一排可以通过 Math.floor(j / 3) 来获取小九宫格下标
    // 那么我们第二排和第三排理应在第一排的基础上 + 3。

    // 而恰巧 Math.floor(i / 3) * 3 即可得到对应相加值：
    // 0/1/2：+0
    // 3/4/5：+3
    // 6/7/8：+6
    // 这样刚好就对应到 boxes[Math.floor(j / 3) + Math.floor(i / 3) * 3]的盒子中了
    let rows = [];
    let columns = [];
    let boxes = [];
    for (let i = 0; i < 9; i++) {
        rows[i] = [];
        columns[i] = [];
        boxes[i] = [];
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // 获取值
            const value = board[i][j];
            if (value !== '.') {
                // 校验竖排
                if (columns[i].includes(value)) {
                    return false;
                } else {
                    columns[i].push(value);
                }
                // 校验横排
                if (rows[j].includes(value)) {
                    return false;
                } else {
                    rows[j].push(value);
                }
                // 校验小九宫格
                const k = Math.floor(j / 3) + Math.floor(i / 3) * 3;
                if (boxes[k].includes(value)) {
                    return false;
                } else {
                    boxes[k].push(value);
                }
            }
        }
    }
    return true;
};
// @lc code=end

