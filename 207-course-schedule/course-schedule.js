/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

//위상정렬 방식으로 풀어보기
//정점에 들어오는 간선수 inDegree 배열을 생성
//inDegree값이 0인 정점 먼저 queue에 넣어서 bfs 진행
//인접한 정점에 대해 inDegree값을 감소시키고 0이 되는 정점이 있을 경우 queue에 삽입
var canFinish = function (numCourses, prerequisites) {
    const inDegree = Array.from({ length: numCourses }).fill(0);
    const graph = new Map();
    const queue = [];
    const order = [];

    for (let [e, v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else graph.set(v, [e]);

        inDegree[e]++;
    }

    for (let i=0; i<inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (let e of graph.get(v)) {
                inDegree[e]--; //방문한 정점에 한해 inDegree값 감소
                if (inDegree[e] === 0) queue.push(e);
            }
        }

        order.push(v);
    }

    return order.length === numCourses;
};


