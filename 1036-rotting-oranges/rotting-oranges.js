/**
 * @param {number[][]} grid
 * @return {number}
 */
const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

var orangesRotting = function (grid) {
    //2가 시작점
    //bfs를 통해 전체 토마토가 2가 되기까지의 시간을 계산
    //bfs가 끝났는데 1이 남아있을 경우 -1
    const m = grid.length;
    const n = grid[0].length;

    let queue = [];
    let ret = 0;

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 2) queue.push([i, j, 0]);
        }
    }

    while(queue.length) {
        const [r, c, depth] = queue.shift();

        //방문처리

        for(let i=0; i<4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if(nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                grid[nr][nc] = 2;
                queue.push([nr, nc, depth+1]);
            }
        }
        ret = depth;
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1) return -1;
        }
    }

    return ret;
};
