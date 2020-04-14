/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
    if (!p) {
        return !s;
    }
    if (s === p) {
        return true;
    }
    if (p.length > 1 && p[1] === '*') {
        if (s && (s[0] === p[0] || p[0] === '.')) {
            return isMatch(s, p.slice(2)) || isMatch(s.slice(1), p)
        } else {
            return isMatch(s, p.slice(2))
        }
    }
    else if (s && p && (s[0] === p[0] || p[0] === '.')) {
        return isMatch(s.slice(1), p.slice(1))
    }
    return false;
};