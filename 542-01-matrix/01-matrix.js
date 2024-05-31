/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    let queue = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if(mat[r][c] == 0) queue.push([r, c]);
            else mat[r][c] = m*n;
        }
    }

    while(queue.length) {
        const [x, y] = queue.shift();

        for(i=0; i<4; i++) {
            const nr = x + dr[i];
            const nc = y + dc[i];

            if(nr < m && nr >= 0 && nc < n && nc >= 0 && mat[x][y] + 1 < mat[nr][nc]) {
                mat[nr][nc] = mat[x][y] + 1;
                queue.push([nr, nc]);
            }
        }
    }


    return mat;
};

