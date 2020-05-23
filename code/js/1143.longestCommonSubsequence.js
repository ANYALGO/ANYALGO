var longestCommonSubsequence = function (text1, text2) {
    if (text1.length == 0 || text2.length == 0)
        return 0;
    var m = text1.length;
    var n = text2.length;
    var dp = [];
    for (var i = 0; i <= m; i++) {
        var temp = [];
        for (var j = 0; j <= n; j++) {
            temp.push(0);
        }
        dp.push(temp);
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
console.log(longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd"));
