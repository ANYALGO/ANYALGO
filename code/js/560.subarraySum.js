/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = function (nums, k) {
    let map = new Map([[0, 1]]);
    let sum = 0;
    let ans = 0;
    for (let num of nums) {
        sum += num;
        ans += map.get(sum - k) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return ans;
}

console.log(subarraySum([1, 1, 1], 2))