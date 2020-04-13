/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let flag = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return nums.sort((x, y) => x - y);
  }
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      let res = nums.slice(i).filter((v) => v > nums[i - 1] && v < nums[i]);
      if (res.length != 0) {
        let m = Math.min(...res);
        let pos = nums.slice(i).indexOf(m) + i;
        let t = nums[pos];
        nums[pos] = nums[i - 1];
        nums[i - 1] = t;
      } else {
        let t = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = t;
      }
      let st = nums.slice(i).sort((x, y) => x - y);
      for (let k = 0; k < st.length; k++) {
        nums[k + i] = st[k];
      }
      break;
    }
  }
  return nums;
};

console.log(nextPermutation([11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,9,20,19]));
