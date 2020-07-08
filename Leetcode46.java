//46. 全排列

//给定一个 没有重复 数字的序列，返回其所有可能的全排列。

//示例:

//输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]



class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        int[] visited = new int[nums.length];
        List<Integer> tem = new ArrayList<>();
        dfs(nums, tem, visited, res);
        return res;
    }
    
    private void dfs (int[] nums, List<Integer> tem, int[] visited, List<List<Integer>> res) {
            if (tem.size() == nums.length) {
                res.add(new ArrayList<Integer>(tem));
                return;
            }
            for (int i = 0; i < nums.length; i++) {
                if (visited[i] == 1) continue;
                visited[i] = 1;
                tem.add(nums[i]);
                dfs(nums, tem, visited, res);
                visited[i] = 0;
                tem.remove(tem.size() - 1);
            }
        }
}