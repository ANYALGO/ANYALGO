/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    if (max === i && nums[i] === 0 && i != nums.length - 1) {
      return i === nums.length - 1;
    }
    if (i + nums[i] >= nums.length) {
      return true;
    }
    max = Math.max(i + nums[i], max);
  }
  return true;
};

console.log(canJump([3, 2, 1, 0, 4]));
