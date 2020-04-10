/**
 * @param {number} n
 * @return {number}
 */
let nextGreaterElement = function (n) {
  if (n <= 10 || n > 2147483647) {
    return -1;
  }
  let s = n.toString();
  let flag = true;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] < s[i]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return -1;
  }
  let arr = s.split("");
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i - 1] < arr[i]) {
      let res = arr.slice(i).filter((v) => v > arr[i - 1] && v < arr[i]);
      if (res.length != 0) {
        let m = Math.min(...res);
        let pos = arr.indexOf(m.toString());
        let t = arr[pos];
        arr[pos] = arr[i - 1];
        arr[i - 1] = t;
      } else {
        let t = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = t;
      }
      let st = arr.slice(i).sort();
      for (let k = 0; k < st.length; k++) {
        arr[k + i] = st[k];
      }
      break;
    }
  }
  let ans = arr.join("")-0;
  if (ans > 2147483647) return -1;
  return ans;
};
