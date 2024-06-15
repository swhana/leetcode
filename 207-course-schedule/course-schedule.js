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
    const order = []; //위상정렬한 배열

    for (let [e, v] of prerequisites) {
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else graph.set(e, [v]);

        inDegree[v]++;
    }

    for (let i=0; i<inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (let e of graph.get(v)) {
                //방문한 정점에 한해 inDegree값 감소
                //이 말은 곧 방문한 정점 e에 들어가는 간선을 지운다는 뜻과 같다
                inDegree[e]--; 
                if (inDegree[e] === 0) queue.push(e);
            }
        }

        order.push(v); //위상정렬된 배열
    }

    //위상정렬은 사이클이 없는 그래프에 의해 성립하므로
    //위상정렬된 배열과 원본배열의 길이가 차이가 있다면 그래프 내에 사이클이 있다는 뜻이 된다
    return order.length === numCourses; 
};


