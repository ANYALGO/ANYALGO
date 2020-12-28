/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const arr = [];
  for (const s of tokens) {
    if (s === "+") {
      arr.unshift(arr.shift() + arr.shift());
    } else if (s === "-") {
      arr.unshift(-arr.shift() + arr.shift());
    } else if (s === "*") {
      arr.unshift(arr.shift() * arr.shift());
    } else if (s === "/") {
      arr.unshift(parseInt(1 / (arr.shift() / arr.shift()), 10));
    } else {
      arr.unshift(parseInt(s, 10));
    }
  }
  return arr.shift();
};

console.assert(evalRPN(["4", "13", "5", "/", "+"]) === 6);
