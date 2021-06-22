/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    let richest = 0;
    
    for (let account of accounts) {
        
        let totAmount = 0;
        
        account.forEach((amount) => totAmount += amount);
        
        richest = Math.max(richest, totAmount);
    }
    
    return richest;
};