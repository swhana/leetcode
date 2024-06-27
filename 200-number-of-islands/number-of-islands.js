/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                grid = bfs(grid, i, j);
                count++;
            }
        }
    }

    return count;
};

function bfs(grid, i, j) {
    let queue = [];
    queue.push([i, j]);

    const dr = [- 1, 1, 0, 0];
    const dc = [0, 0, - 1, 1];
    while (queue.length > 0) {
        let [r, c] = queue.shift();

        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') {
            continue;
        }

        grid[r][c] = '0';
        for (let n = 0; n < 4; n++) {
            const nr = r + dr[n];
            const nc = c + dc[n];

            queue.push([nr, nc]);
        }
    }

    return grid;
}