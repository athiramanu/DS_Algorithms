/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    
    let parents = {};
    let visited = new Set();
    
    for (let edge of edges) {
        
        if (visited.has(edge[0]) && visited.has(edge[1])) {
            let parent1 = parents[edge[0]], parent2 = parents[edge[1]];
            
            while (parents[parent1] != parent1) parent1 = parents[parent1];
            while (parents[parent2] != parent2) parent2 = parents[parent2];
            
            if (parent1 != parent2) parents[parent1] = parent2;
            else return edge;
        }
        
        else if (visited.has(edge[0])) {
            parents[edge[1]] = parents[edge[0]];
            visited.add(edge[1]);
        }
        
        else if (visited.has(edge[1])) {
            parents[edge[0]] = parents[edge[1]];
            visited.add(edge[0]);
        }
        
        else {
            parents[edge[0]] = edge[0];
            parents[edge[1]] = edge[0];
            visited.add(edge[0]);
            visited.add(edge[1]);
        }   
    }  
};