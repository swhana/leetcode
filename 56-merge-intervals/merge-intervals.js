/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = [];

    intervals.sort((a, b) => a[0] - b[0]);

    let ret_st = intervals[0][0];
    let ret_ed = intervals[0][1];

    for(let i=1; i<intervals.length; i++) {
        const st = intervals[i][0];
        const ed = intervals[i][1];

        //interval이 끊어짐
        if(ret_ed < st) {
            ans.push([ret_st, ret_ed]);

            //새로운 interval 형성
            ret_st = st;
            ret_ed = ed;
        } else {
            if(ret_ed < ed) ret_ed = ed;
        }
    }
    ans.push([ret_st, ret_ed]);
    
    
    return ans;
};