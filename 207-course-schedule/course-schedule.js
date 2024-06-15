/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let visited = Array.from({ length: numCourses.length }, () => false);
    let adjList = Array.from({ length: numCourses.length });

    for (let i = 0; i < prerequisites.length; i++) {
        const st = prerequisites[i][0];
        const ed = prerequisites[i][1];

        if (adjList[st] === undefined) adjList[st] = [ed];
        else adjList[st].push(ed);
    }

    function dfs(course) {
        //한번 들었던 코스를 다시 듣는 것이므로 사이클이 만들어짐
        if (visited[course]) return false;

        if (adjList[course] !== undefined) {
            //더이상 인접한 노드가 없으므로 사이클이 만들어지지않음
            if (adjList[course].length == 0) {
                return true;
            }

            visited[course] = true;
            //인접한 코스를 대상으로 dfs 진행
            //해당 코스에서 사이클이 발견되면 false
            for (let adj of adjList[course]) {
                if (!dfs(adj)) return false;
            }
            visited[course] = false;

            //시간초과 해결
            adjList[course] = [];
        }
        return true;
    }

    for (let i in adjList) {
        if (!dfs(i)) return false;
    }

    return true;
};


