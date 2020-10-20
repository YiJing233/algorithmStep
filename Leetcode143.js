// 143. 重排链表

// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.

// 示例 2:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head == null || head.next == null) return;
    let slow = head,
        fast = head;
    // 使用快慢指针定位中点 slow为中点
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 让后端的链表完全反转，将总链表分成两份
    let pre = null;
    let cur = slow.next;
    while (cur != null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    slow.next = null;

    // pre是后端开始
    let endStart = pre;
    // head是前端开始
    let frontStart = head;
    while(frontStart && endStart) {
        let curEnd = endStart;
        endStart = endStart.next;
        let curFro = frontStart;
        frontStart = frontStart.next;

        // 前端的节点指向了后端节点
        curFro.next = curEnd;
        // 后端的节点指向了下一次循环的前端的开头节点
        curEnd.next = frontStart;
    }

};