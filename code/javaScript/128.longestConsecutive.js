/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;
    for (const num of nums) {
        let count = 0;
        let temp = num;
        while (set.has(temp)) {
            count++;
            temp--;
        }
        max = Math.max(max, count);
    }
    return max;
};