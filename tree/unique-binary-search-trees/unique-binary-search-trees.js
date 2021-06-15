/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    
    let uniqueTrees = [1,1];
        
    for (let nodes = 2; nodes <= n; nodes++) {
        
        uniqueTrees[nodes] = 0;
        
        for (let root = 1; root <= nodes; root++) {
            uniqueTrees[nodes] += uniqueTrees[root-1] * uniqueTrees[nodes - root];
        }
                
    }
    
    return uniqueTrees[n];
};