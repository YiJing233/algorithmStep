// 剑指 Offer 25. 合并两个排序的链表

// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 限制：

// 0 <= 链表长度 <= 1000

// 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(1);
    let res = head;
    while(l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            head.next = l2;
            l2 = l2.next;
            head = head.next;
        } else if (l1.val <= l2.val) {
            head.next = l1;
            l1 = l1.next;
            head = head.next;
        }
    }
    while (l1 !== null) {
        head.next = l1;
        head = head.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        head.next = l2;
        head = head.next;
        l2 = l2.next;
    }
    return res.next;
};