/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  let len = nums.length;
  if (len < 2) {
    return nums;
  }
  let left = 0;
  let cur = 0;
  let right = len - 1;
  let temp;
  while (cur <= right) {
    if (nums[cur] === 0) {
      temp = nums[left];
      nums[left++] = nums[cur];
      nums[cur++] = temp;
    } else if (nums[cur] === 2) {
      temp = nums[cur];
      nums[cur] = nums[right];
      nums[right--] = temp;
    } else {
      cur++;
    }
  }
  return nums;
};
