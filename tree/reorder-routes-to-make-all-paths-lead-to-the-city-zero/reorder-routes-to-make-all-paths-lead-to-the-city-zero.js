/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var minReorder = function(n, connections) {
    
    let swaps = 0;
    let canVisit = new Set([0]);
    
    while (connections.length) {
        
        let nextConn = [];
        
        connections.forEach(connection => {
            
            let [from, to] = connection;
            
            if (canVisit.has(to)) canVisit.add(from);
            
            else if (canVisit.has(from)) {
                swaps++;
                canVisit.add(to);
            }
            
            else nextConn.push([from, to]);
            
        })
        
        connections = nextConn;
    }
    
    return swaps;
};