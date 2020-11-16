/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) {
        return null;
    }
    const len = head.length;
    if (len < k) {
        return head;
    }
    // 复制这个链表备用
    let p = head;
    // 中间变量数组储存
    let arr = [];
    // 最后存储数组
    let resultArr = []
    // 计数
    let num = 0;
    while (p) {
        // 用数组储存反转的链表
        arr.unshift(p);
        p = p.next;
        if (++num === k) {
            resultArr = resultArr.concat(arr);
            num = 0;
            arr = [];
        } else if (!p) {
            // 如果剩下的数量小于k那么反转回来
            resultArr = resultArr.concat(arr.reverse());
        }
    }
    resultArr.forEach((item, num) => {
        // 巧妙低将每个数组元素中的分割链表第一个元素链接起来
        item.next = resultArr[num + 1] || null;
    });
    return resultArr[0] || head;
};
// @lc code=end

