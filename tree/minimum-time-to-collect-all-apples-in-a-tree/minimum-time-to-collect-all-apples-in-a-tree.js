/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
 var minTime = function(n, edges, hasApple) {
    
    let parentMap = new Map();
    let seen = new Set();
    
    edges.forEach(([parent, child]) => parentMap.set(child, parent));
    
    hasApple.forEach((apple, index) => {

        if (!apple) return;
        
        while (index != 0 ) {
            
            let edge = index + "-" + parentMap.get(index);
            
            if (seen.has(edge)) break;
            
            seen.add(edge);
            
            index = parentMap.get(index) 
        }
    });
    
    return seen.size*2;
};