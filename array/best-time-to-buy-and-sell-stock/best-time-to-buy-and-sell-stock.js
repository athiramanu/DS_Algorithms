/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i, min=Infinity, max=0, result=0;
    
    for (i = prices.length-1; i >= 0; i--) {
        min = min < prices[i] ? min : prices[i];
        if (max < prices[i]) {
            min = Infinity;
            max = prices[i]
        }
        result = result > max - min ? result : max - min;
    }
    
    return result;
};