/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    //dp = [amount, amount, amount, ...];
    let dp = Array.from({ length: amount + 1 }).fill(amount + 1);
    
    dp[0] = 0; //0원을 채우는 동전 수는 0밖에 없음

    for(let coin of coins) {
        dp[coin] = 1;
    }

    for(let i=0; i<=amount; i++) {        
        for(let coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }

    if(amount === 0) return 0;
    return dp[amount] > amount ? -1 : dp[amount];
};