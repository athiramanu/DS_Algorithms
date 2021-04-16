/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if (prices.length <= 1) return 0; 
let evenProfits = new Array(prices.length).fill(0);
let oddProfits = new Array(prices.length).fill(0);

for (let t = 1; t < k + 1; t++) {
    let currProfit, prevProfit;
    let maxValue = -Infinity;

    if (t % 2 == 1) {
        currProfit = oddProfits;
        prevProfit = evenProfits;
    } else {
        currProfit = evenProfits;
        prevProfit = oddProfits;
    }

    for (let i = 1; i < prices.length; i++) {
        maxValue = Math.max(maxValue, - prices[i - 1] + prevProfit[i - 1]);
        currProfit[i] = Math.max(currProfit[i - 1], prices[i] + maxValue);
    }
}

return k % 2 == 0 ? evenProfits.pop() : oddProfits.pop();

}
