/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    var size = grid.length;
    var dir = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0],
        [1,1],
        [-1,-1],
        [1,-1],
        [-1,1]
    ];
    
    if (size == 0 || grid[0][0]) {
        return -1;
    }
    
    var path = 0;
    var seen = {};
    var q = [{row: 0, col: 0}];
    
    while (q.length > 0) {
        path++;
        
        for (var i = q.length; i > 0; i--) {
            var {row, col} = q.shift();
            
            if (row == size-1 && col == size-1) {
                return path;
            }
            
            for (var d of dir) {
                var r = row + d[0];
                var c = col + d[1];
                
                if (r < 0 || c < 0 || r >= size || c >= size) {
                    continue;
                }
                
                if (seen[r*size+c]) {
                    continue;
                }
                
                if (grid[r][c] == 0) {
                    seen[r*size+c] = true;
                    q.push({row: r, col: c});
                }
            }
        }        
    }
    
    return -1;
};