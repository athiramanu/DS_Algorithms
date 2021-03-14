/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let node1 = edges[0][0];
    let node2 = edges[0][1];
    
    if (edges[1][1] == node1 || edges[1][0] == node1) {
        return node1;
    }
    else {
        return node2;
    }
    
};