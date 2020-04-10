/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  if (s.length === new Set(s).size) {
    return s.length;
  }
  let map = new Map();
  let left = 0;
  let max = 1;
  map.set(s[0], 0);
  for (let i = 1; i < s.length; i++) {
    if (map.has(s[i])) {
      left = Math.max(left, map.get(s[i]) + 1);
    }
    max = Math.max(i - left + 1, max);
    map.set(s[i], i);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("cdd"));
console.log(lengthOfLongestSubstring("cddc"));
