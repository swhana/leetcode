/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const row_len = matrix.length;
    const col_len = matrix[0].length;
    const visited = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(false));
    const result = [];

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirIdx = 0; // 0~3

    let row = 0;
    let col = 0;

    while (row >= 0 && row < row_len && col >= 0 && col < col_len && !visited[row][col]) {
        //방문처리
        visited[row][col] = true;
        result.push(matrix[row][col]);

        console.log("[" + row + ',' + col + "]" + " 방문");
        //다음 갈 방향 예상
        const row_next = row + dir[dirIdx][0];
        const col_next = col + dir[dirIdx][1];

        if (row_next >= 0 && row_next < row_len && col_next >= 0 && col_next < col_len && !visited[row_next][col_next]) {
            row = row_next;
            col = col_next;
        } else {
            console.log('방향 전환')
            dirIdx = (dirIdx + 1) % 4;

            row += dir[dirIdx][0];
            col += dir[dirIdx][1];
        }
    }

    return result;
};