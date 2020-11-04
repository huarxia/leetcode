/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 如果不是一个数组直接返回空数组
    if (!(nums instanceof Array)) {
        return [];
    }
    // 如果不是一个数字返回空数组
    if (typeof target !== 'number') {
        return [];
    }
    // 如果数组长度小于等于1 直接返回空数组 
    if (nums.length <= 1) {
        return [];
    }
    const LEN = nums.length;
    let map = new Map();
    // let tempArr = [];
    for (let i = 0; i < LEN; i++) {
        let dif = target - nums[i];
        if (map.has(dif)) {
            // 返回多组的情况
            // tempArr.push([map.get(dif), i]);
            return [map.get(dif), i];
        }
        map.set(nums[i], i);
    }
    // 返回多组的情况
    // return tempArr;
    return [];
};
