# 130. 被围绕的区域

# 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

# 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

# 示例:

# X X X X
# X O O X
# X X O X
# X O X X

# 运行你的函数后，矩阵变为：

# X X X X
# X X X X
# X X X X
# X O X X

# 解释:

# 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        from collections import deque
        d = deque()
        m = len(board) # 行数
        if m <= 2: return
        n = len(board[0]) # 列数
        if n <= 2: return
        for i in range(m):
            if board[i][0] == 'O':
                board[i][0] = '.'
                d.appendleft((i, 0))
            if board[i][n-1] == 'O':
                board[i][n-1] = '.'
                d.appendleft((i, n-1))
        for i in range(1, n-1):
            if board[0][i] == 'O':
                board[0][i] = '.'
                d.appendleft((0, i))
            if board[m-1][i] == 'O':
                board[m-1][i] = '.'
                d.appendleft((m-1, i))
        while d:
            x, y = d.pop()
            for xd, yd in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nx, ny = x+xd, y+yd
                if 0 <= nx < m and 0 <= ny < n and board[nx][ny] == 'O':
                    board[nx][ny] = '.'
                    d.appendleft((nx, ny))
        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O':
                    board[i][j] = 'X'
                elif board[i][j] == '.':
                    board[i][j] = 'O'