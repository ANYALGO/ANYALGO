const longestCommonSubsequence = function (text1: string, text2: string): number {
    if (text1.length == 0 || text2.length == 0) return 0;
    let m = text1.length;
    let n = text2.length;
    let dp: number[][] = [];
    for (let i = 0; i <= m; i++) {
        let temp: number[] = [];
        for (let j = 0; j <= n; j++) {
            temp.push(0);
        }
        dp.push(temp);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};

console.log(longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd"))