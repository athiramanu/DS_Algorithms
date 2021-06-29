/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    
    let candyCounts = new Array(ratings.length).fill(1);
    let candies = 0;
    
    for (let i = 1; i < ratings.length; i++) {
        
        if (ratings[i] > ratings[i-1])
        
            candyCounts[i] = candyCounts[i-1]+1;
    }
        
    for (let i = ratings.length-2; i >= 0; i--) {
        
        if (ratings[i] > ratings[i+1])
        
            candyCounts[i] = Math.max(candyCounts[i], candyCounts[i+1]+1);
    }
    
    candyCounts.forEach(count => candies += count);
    
    return candies;
};