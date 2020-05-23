var longestPalindrome = function (s) {
  if (!s) return "";
  if (s.length === 1) return s;
  if (s.length === 2) return s[0] === s[1] ? s : s[1];
  let str = "",
    len = s.length;
  for (let i = 0; i < len; i++) {
    let e = "",
      o = "";
    if (s[i] === s[i + 1]) {
      let eIdx = help(s, i - 1, i + 2);
      e = s.slice(eIdx.left, eIdx.right);
    }
    let oIdx = help(s, i - 1, i + 1);
    o = s.slice(oIdx.left, oIdx.right);
    let longer = e.length > o.length ? e : o;
    str = str.length > longer.length ? str : longer;
  }
  return str;
};

function help(s, left, right) {
  let len = s.length;
  while (left >= 0 && right < len && s[left] === s[right]) {
    left--;
    right++;
  }
  return { left: left + 1, right: right };
}
