/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let newIntervals = insertInterval(intervals, newInterval);
    return mergeIntervals(newIntervals);
};

function mergeIntervals(intervals) {
    let newIntervals = [];
    
    for (let i = 0, j = 0; i < intervals.length-1; i++) {
        if (intervals[i][1] < intervals[i+1][0]) {
            newIntervals.push(intervals[i]);
        } else {
            intervals[i+1][0] = Math.min(intervals[i][0], intervals[i+1][0]);
            intervals[i+1][1] = Math.max(intervals[i][1], intervals[i+1][1])
        }
    }
    newIntervals.push(intervals[intervals.length-1]);
    return newIntervals;
}

function insertInterval(intervals, newInterval) {
    let i, newIntervals = [];

    for (i = 0; i < intervals.length; i++) {
        let [start, end] = newInterval;
        if (start <= intervals[i][0]) break;
        newIntervals.push(intervals[i]);
    }

    newIntervals.push(newInterval);
    newIntervals.push(...intervals.slice(i));   
    
    return newIntervals;
}