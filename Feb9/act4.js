function matrixChainMultiplication(p) {
    const n = p.length - 1; // Number of matrices
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    // Fill in the dp array using bottom-up dynamic programming
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                const cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }

    return dp[0][n - 1];
}


const dimensions = [10, 30, 5, 60];
console.log(matrixChainMultiplication(dimensions));