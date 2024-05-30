/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let i=0;
    let ret = [];


    while(i < intervals.length && intervals[i][1] < newInterval[0]) {
        ret.push([...intervals[i]]);
        i++;
    }

    while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    ret.push([newInterval[0], newInterval[1]]);

    while(i < intervals.length) {
        ret.push([...intervals[i]]);
        i++;
    }

    return ret;    
};