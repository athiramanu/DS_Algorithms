/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, dp = {}) {
    let count, min = Infinity;
    
    if (amount in dp) return dp[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    
    for (var coin of coins) {
        count = coinChange(coins, amount - coin, dp);
        if (count != -1) min = Math.min(min, count+1);
    }
    
    return min === Infinity ? dp[amount] = -1 : dp[amount] = min;
};