/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    // 首先构造一个空链表，后面只需return ListNode.next即可
    let List = new ListNode(0);
    let head = List;
    // 初始每位的相加和
    let sum = 0;
    // 进位标识
    let carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        // 连接链表
        head.next = new ListNode(sum);
        head = head.next;
        // 进位1保留赋给sum方便下一步相加
        sum = carry;
        // 清空进位
        carry = 0;
    }
    return List.next;
};
// @lc code=end

