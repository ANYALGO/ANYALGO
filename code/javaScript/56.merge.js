/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((x, y) => x[0] - y[0])
    const ans = [];
    let [left, right] = [intervals[0][0], intervals[0][1]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > right) {
            ans.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }
        right = Math.max(right, intervals[i][1]);
        if (i === intervals.length - 1) {
            ans.push([left, right]);
        }
    }
    return ans;
};
