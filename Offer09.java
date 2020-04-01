import java.util.Stack;

// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

// 提示：

//     1 <= values <= 10000
//     最多会对 appendTail、deleteHead 进行 10000 次调用


class CQueue {
    Stack<Integer> stack1;
    Stack<Integer> stack2;

    public CQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    public void appendTail(int value) {
        stack1.add(value);
    }
    
    public int deleteHead() {
        if(stack2.isEmpty()){
            if(stack1.isEmpty()) return -1;
            while(!stack1.isEmpty()){
                stack2.add(stack1.pop());
            }
            return stack2.pop();
        }
        else return stack2.pop();
    }
}

//思路是用另一个栈来维护一个栈，Stack可能速度不高，因为它继承了Vector接口，
//而Vector底层是AbstractList，是一个数组，那么就要考虑空间扩容的问题了。 
//可以使用LinkedList来做Stack的容器，因为LinkedList实现了Deque接口，
//所以Stack能做的事LinkedList都能做，其本身结构是个链表，扩容消耗少。就是不符合题意