/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  try {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  } catch (err) {
    return [-1, -1];
  }
  return [-1, -1];
};
