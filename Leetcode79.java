class Solution {
    public boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++){
            for (int j = 0; j < board[0].length; j++) {
                if (search(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return  false;
    }

    boolean search(char[][] board, String word, int i, int j, int start) {
        if (start >= word.length()) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word.charAt(start)) return false;
        board[i][j] += 512;
        boolean result = search(board, word, i - 1, j, start + 1) || search(board, word, i + 1, j, start + 1)
                || search(board, word, i, j - 1, start + 1) || search(board, word, i, j + 1, start + 1);
        board[i][j] -= 512;
        return result;
    }
}

//此题与剑指Offer12相同