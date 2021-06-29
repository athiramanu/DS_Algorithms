/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    
    if (ratings.length == 0) return 0;
    
    let candies = 1, up = 0, down = 0, peak = 0;
    
    for (let i = 1; i < ratings.length; i++) {
        
        if (ratings[i-1] < ratings[i]) {
            peak = ++up;
            down = 0;
            candies += (up + 1);
        }
        
        else if (ratings[i-1] === ratings[i]) {
            peak = up = down = 0;
            candies++;
        }
        
        else {
            down++;
            up = 0;
            candies += (1 + down) + (peak >= down ? -1 : 0);
        }
    }
    
    return candies;
};