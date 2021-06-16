/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    
    let length = matchsticks.length;  
    let edges = [0, 0, 0, 0];
    let sum = matchsticks.reduce((a,b) => a+b);
    let edge = sum / 4;
    
    if (!Number.isInteger(edge)) return false;
    
    matchsticks.sort((a,b) => b-a);
    
    function dfs(index) {
        
        if (index == length) 
        
            return edges[0] == edges[1] && edges[0] == edges[2] && edges[0] == edge;
        
        for (let i = 0; i < 4; i++) {
            
            if (edges[i] + matchsticks[index] <= edge) {
    
                edges[i] += matchsticks[index];
            
                if (dfs(index+1)) return true;
    
                edges[i] -= matchsticks[index];
            }
        }
        
        return false
    }
    
    return dfs(0);
};