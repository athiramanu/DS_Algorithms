/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    
    let map = {}, result = 0, currHeight = 0;
    
    heights.forEach(height => {
        
        if (map[height]) map[height]++;
        
        else map[height] = 1;
    });
        
    heights.forEach((height) => {
       
        while (!map[currHeight]) currHeight++;
        
        if (height !== currHeight) result++;
        
        map[currHeight]--;
    });
    
    return result;
};