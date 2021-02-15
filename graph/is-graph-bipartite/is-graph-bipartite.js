/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var map = new Map();
    var state = true;
    var index = {};
    var queue = [];    
    
    for (var i in graph) {
        index[i] = graph[i];
    }
    
    for (var i in index) {
        map.set(i,state);
        queue.push(i);
        while (queue.length) {
            var node = queue.shift();
            state = map.get(node);

            for (var path of graph[node]) {
                if (map.get(path) == state) {
                    return false;
                }
                else if (map.get(path) != undefined) {
                    continue;
                }
                else {
                    map.set(path, !state);
                    queue.push(path);
                    delete index[path];
                }
            }
        }            
        
    }
    
    return true;
};