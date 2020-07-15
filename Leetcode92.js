// 92. 反转链表 II

// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let pre, cur, leftHead;
    const dummy = new ListNode();
    dummy.next = head;
    let p = dummy;

    for (let i =0; i < m - 1; i++) {
        p = p.next;
    }

    leftHead = p;
    let start = leftHead.next;
    pre = start;
    cur = pre.next;

    for (let i = m; i < n; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    leftHead.next = pre;
    start.next = cur;
    return dummy.next
};