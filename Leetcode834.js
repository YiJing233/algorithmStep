// 834. 树中距离之和

// 给定一个无向、连通的树。树中有 N 个标记为 0...N-1 的节点以及 N-1 条边 。

// 第 i 条边连接节点 edges[i][0] 和 edges[i][1] 。

// 返回一个表示节点 i 与其他所有节点距离之和的列表 ans。

// 示例 1:

// 输入: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// 输出: [8,12,6,10,10,10]
// 解释: 
// 如下为给定的树的示意图：
//   0
//  / \
// 1   2
//    /|\
//   3 4 5

// 我们可以计算出 dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5) 
// 也就是 1 + 1 + 2 + 2 + 2 = 8。 因此，answer[0] = 8，以此类推。

// 说明: 1 <= N <= 10000

/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */

 const sumOfDistancesInTree = (N, edges)=>{
     const gragh = new Array(N);
     for (let i = 0; i < gragh.length; i++) {
         gragh[i] = [];
     }
     for (const edge of edges) {
         const [from, to] = edge;
         gragh[from].push(to);
         gragh[to].push(from);
     }
     const distSum = new Array(N).fill(0);
     const nodeNum = new Array(N).fill(1);

     const postOrder = (root, parent) =>{
         const neighbors = gragh[root];
         for (const neighbor of neighbors) {
             if (neighbor == parent) {
                 continue;
             }
             postOrder(neighbor, root);
             nodeNum[root] += nodeNum[neighbor];
             distSum[root] += nodeNum[neighbor] + distSum[neighbor];
         }
     };

     const preOrder = (root, parent)=>{
         const neighbors = gragh[root];
         for (const neighbor of neighbors) {
             if (neighbor == parent) {
                 continue;
             }
             distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
             preOrder(neighbor, root);
         }
     };

     postOrder(0, -1);
     preOrder(0, -1);
     return distSum;
 }