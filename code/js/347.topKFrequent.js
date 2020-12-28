/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let entries = Array.from(map.entries());
  entries.sort((a, b) => b[1] - a[1]);
  return entries.slice(0, k).map((a) => a[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
