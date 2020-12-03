/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let set = new Set();
    // dfs回溯模板代码
    let dfs = (start, arr, result) => {
        if (result === target) {
            // arr.slice() => 拷贝数组 sort
            // => 升序 join
            // =>转化成字符串(因为Set.has 不能去重数组，所以要先转换成字符串))
            let tmp = arr.slice().sort((a,b) => a - b).join('.'); 
            // 判断有无重复路径
            if (!set.has(tmp)) {
                res.push(arr.slice());
            }
            // 每遍历一次，就将该路径的字符串保存起来，方便查重
            set.add(tmp);
            return;
        } else if (result > target) {
            return;
        }
        // 下面全是老套路代码 回溯经典写法
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            dfs(i + 1, arr, result + candidates[i]);
            arr.pop();
        }
    }
    dfs(0, [], 0); 
    return res;
};
// @lc code=end

