// 234. 回文链表

// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false

// 示例 2:

// 输入: 1->2->2->1
// 输出: true

// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast != null) {
        fast = fast.next ? fast.next.next : fast.next;
    }
    while (slow != null) {
        let tem = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tem;
    }
    while (head != null && prev != null) {
        if (head.val != prev.val) {
            return false;
        }
        head = head.next;
        prev = prev.next;
    }
    return true;
}