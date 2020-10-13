// 24. 两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

// 示例 1：

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

// 示例 2：

// 输入：head = []
// 输出：[]

// 示例 3：

// 输入：head = [1]
// 输出：[1]

 

// 提示：

//     链表中节点的数目在范围 [0, 100] 内
//     0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null || head.next == null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let p = head;
    while(p != null && p.next != null) {
        let next = p.next;
        p.next = next.next;
        next.next = p;
        pre.next = next;
        pre = p;
        p = p.next;
    }
    return dummy.next;
};
