const combine = function (n: number, k: number): number[][] {
    const ans: number[][] = [];
    const backtrace = function (pos: number = 1, cur: number[] = []) {
        if (cur.length === k) {
            ans.push(cur.slice())
        }
        for (let i = pos; i < n + 1; i++) {
            cur.push(i)
            backtrace(i + 1, cur)
            cur.pop()
        }
    }
    backtrace()
    return ans;
};