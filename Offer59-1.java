class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return new int[0];
        }
        int [] res = new int[nums.length -k +1];
        Deque<Integer> queue = new ArrayDeque<>();
        for (int i = 0, j = 0; i < nums.length; i++) {
            if (!queue.isEmpty() && i - queue.peek() >= k) {
                queue.poll(); // 队列还有上一窗口的首值，要出队
            }
            while (!queue.isEmpty() && nums[i] > nums[queue.peekLast()]) {
                queue.pollLast(); // 队列不能保持递减
            }
            queue.offer(i); // 正常情况，入队
            if (i >= k - 1) { // 保证起码倒了一个窗口
                res[j] = nums[queue.peek()];
                j++;
            }
        }
        return res;
    }
}