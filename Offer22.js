// 剑指 Offer 22. 链表中倒数第k个节点

// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

 

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 解法一，一个走完，另一个开始走
 */
var getKthFromEnd = function(head, k) {
    var count = 0;
    let res = head;
    while (head != null) {
        head = head.next;
        count++;
    }
    for (let i = 0; i < count - k; i++) {
        res = res.next;
    }
    return res;
};

// 解法二，一个先走k步，然后两个同步走，走到最后慢的指针就指向倒数第k个
var getKthFromEnd2 = (head, k)=>{
    var frontNode = head;
    var endNode = head;

    while(frontNode != null && k > 0) {
        frontNode = frontNode.next;
        k--;
    }

    while (frontNode != null) {
        frontNode = frontNode.next;
        endNode = endNode.next;
    }
    return endNode;
}