// 21. 合并两个有序链表

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

 // 迭代做法，存在重复代码，可以优化
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    head := &ListNode{}
    res := head

    for l1 != nil && l2 != nil {
        if l1.Val >= l2.Val {
            head.Next = l2
            head = head.Next
            l2 = l2.Next
        } else if l1.Val < l2.Val {
            head.Next = l1
            head = head.Next
            l1 = l1.Next
        }
    }

    for l1 != nil {
        head.Next = l1
        head = head.Next
        l1 = l1.Next
    }

    for l2 != nil {
        head.Next = l2
        head = head.Next
        l2 = l2.Next
    }
    return res.Next
}

// 递归做法

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    if l1 == nil {
        return l2
    }
    if l2 == nil {
        return l1
    }

    res := &ListNode{}

    if l1.Val >= l2.Val {
        res = l2
        res.Next = mergeTwoLists(l1, l2.Next)
    } else {
        res = l1
        res.Next = mergeTwoLists(l1.Next, l2)
    }
    return res
}