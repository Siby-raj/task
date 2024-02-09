let coins = [1], amount = 2
function findTheCombination(coins,amount){
   

        // Create an array to store the minimum number of coins needed for each amount
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;
    
        // Update the dp array for each coin denomination
        for (const coin of coins) {
            for (let i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    
        // If dp[amount] is still Infinity, no combination was found
        return dp[amount] === Infinity ? -1 : dp[amount];
    }

console.log(findTheCombination(coins,amount))