import java.util.Stack;

// 面试题06. 从尾到头打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 示例 1：
// 输入：head = [1,3,2]
// 输出：[2,3,1]
// 限制：
// 0 <= 链表长度 <= 10000


class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public int[] reversePrint(ListNode head) {
        final Stack<Integer> stack = new Stack<>();
        while (head != null) {
            stack.push(head.val);
            head = head.next;
        }
        final int[] res = new int[stack.size()];
        int count = 0;
        while(!stack.isEmpty()){
            res[count++] = stack.pop();
        }
        return res;
    }
}

//用Python做快的飞起，直接res[::-1]