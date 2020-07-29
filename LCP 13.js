// LCP 13. 寻宝

// 我们得到了一副藏宝图，藏宝图显示，在一个迷宫中存在着未被世人发现的宝藏。

// 迷宫是一个二维矩阵，用一个字符串数组表示。它标识了唯一的入口（用 'S' 表示），和唯一的宝藏地点（用 'T' 表示）。但是，宝藏被一些隐蔽的机关保护了起来。在地图上有若干个机关点（用 'M' 表示），只有所有机关均被触发，才可以拿到宝藏。

// 要保持机关的触发，需要把一个重石放在上面。迷宫中有若干个石堆（用 'O' 表示），每个石堆都有无限个足够触发机关的重石。但是由于石头太重，我们一次只能搬一个石头到指定地点。

// 迷宫中同样有一些墙壁（用 '#' 表示），我们不能走入墙壁。剩余的都是可随意通行的点（用 '.' 表示）。石堆、机关、起点和终点（无论是否能拿到宝藏）也是可以通行的。

// 我们每步可以选择向上/向下/向左/向右移动一格，并且不能移出迷宫。搬起石头和放下石头不算步数。那么，从起点开始，我们最少需要多少步才能最后拿到宝藏呢？如果无法拿到宝藏，返回 -1 。

// 示例 1：

//     输入： ["S#O", "M..", "M.T"]

//     输出：16

//     解释：最优路线为： S->O, cost = 4, 去搬石头 O->第二行的M, cost = 3, M机关触发 第二行的M->O, cost = 3, 我们需要继续回去 O 搬石头。 O->第三行的M, cost = 4, 此时所有机关均触发 第三行的M->T, cost = 2，去T点拿宝藏。 总步数为16。 

/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function(maze) {
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    let n = maze.length
    let m = maze[0].length

    // 机关&石头
    const buttons = new Array()
    const stones = new Array()

    // 起点&终点
    let sx = -1, sy = -1, tx = -1, ty = -1

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maze[i][j] === 'M') {
                buttons.push([i, j])
            }
            if(maze[i][j] === 'O') {
                stones.push([i, j])
            }
            if(maze[i][j] === 'S') {
                sx = i, sy = j
            }
            if(maze[i][j] === 'T') {
                tx = i, ty = j
            }
        }
    }

    // 机关&石头的数量
    let nb = buttons.length, ns = stones.length

    // 判断边界
    function inBound(x, y) {
        return x >= 0 && x < n && y >= 0 && y < m;
    }

    // bfs
    function bfs(x, y, maze) {
        let ret = Array.from(Array(n), () => Array(m).fill(-1))
        ret[x][y] = 0
        const queue = new Array()
        queue.push([x, y])
        while(queue.length) {
            let p = queue.shift()
            let curx = p[0], cury = p[1]
            for(let k = 0; k < 4; k++) {
                let nx = curx + dx[k], ny = cury + dy[k];
                if(inBound(nx, ny) && maze[nx][ny] !== '#' && ret[nx][ny] == -1) {
                    ret[nx][ny] = ret[curx][cury] + 1;
                    queue.push([nx, ny])
                }
            }
        }
        return ret
    }

    let startDist = bfs(sx, sy, maze)

    // 边界情况：没有机关
    if (nb == 0) {
        return startDist[tx][ty]
    }

    // 从某个机关到其他机关 / 起点与终点的最短距离。
    const dist = Array.from(Array(nb), () => Array(nb + 2).fill(-1))

    // 中间结果
    const dd = new Array(nb)
    for(let i = 0; i < nb; i++) {
        let d = bfs(buttons[i][0], buttons[i][1], maze)
        dd[i] = d
        dist[i][nb + 1] = d[tx][ty]
    }
    for(let i = 0; i < nb; i++) {
        let tmp = -1
        for(let k = 0; k < ns; k++) {
            let midX = stones[k][0], midY = stones[k][1]
            if(dd[i][midX][midY] != -1 && startDist[midX][midY] != -1) {
                if(tmp == -1 || tmp > dd[i][midX][midY] + startDist[midX][midY]) {
                    tmp = dd[i][midX][midY] + startDist[midX][midY]
                }
            }
        }
        dist[i][nb] = tmp
        for (let j = i + 1; j < nb; j++) {
            let mn = -1
            for (let k = 0; k < ns; k++) {
                let midX = stones[k][0], midY = stones[k][1]
                if (dd[i][midX][midY] != -1 && dd[j][midX][midY] != -1) {
                    if (mn == -1 || mn > dd[i][midX][midY] + dd[j][midX][midY]) {
                        mn = dd[i][midX][midY] + dd[j][midX][midY]
                    }
                }
            }
            dist[i][j] = mn
            dist[j][i] = mn
        }
    }

    // 无法达成的情形
     for (let i = 0; i < nb; i++) {
        if (dist[i][nb] == -1 || dist[i][nb + 1] == -1) {
            return -1
        }
    }

    // dp 数组， -1 代表没有遍历到
    const dp = Array.from(Array(1 << nb), () => Array(nb).fill(-1))
    for(let i = 0; i < nb; i++) {
        dp[1 << i][i] = dist[i][nb]
    }

    // 由于更新的状态都比未更新的大，所以直接从小到大遍历即可
    for(let mask = 1; mask < (1 << nb); mask++) {
        for(let i = 0; i < nb; i++) {
            // 当前 dp 是合法的
            if((mask & (1 << i)) != 0) {
                for(let j = 0; j < nb; j++) {
                    // j 不在 mask 里
                    if((mask & (1 << j)) == 0) {
                        let next = mask | (1 << j)
                        if(dp[next][j] == -1 || dp[next][j] > dp[mask][i] + dist[i][j]) {
                            dp[next][j] = dp[mask][i] + dist[i][j]
                        }
                    }
                }
            }
        }
    }
    let ret = -1
    let finalMask = (1 << nb) - 1
    for(let i = 0; i < nb; i++) {
        if(ret == -1 || ret > dp[finalMask][i] + dist[i][nb + 1]) {
            ret = dp[finalMask][i] + dist[i][nb + 1]
        }
    }
    return ret
}