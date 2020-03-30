class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix == null || matrix.length == 0){
            return false;
        }

        int m = matrix.length, n = matrix[0].length;
        int row = 0, col = n-1;

        while(row < m && col >=0){
            if(matrix[row][col] > target){
                col--;
            }
            else if(matrix[row][col] < target){
                row++;
            }
            else{
                return true;
            }
        }
        return false;
    }
}

//和剑指Offer第三题相同