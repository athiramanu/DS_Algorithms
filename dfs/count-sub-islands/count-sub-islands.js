/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
    
    let visited = {};
    let count = 0;
    
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[0].length; j++) {
            if (!grid2[i][j] || (i+"-"+j) in visited) continue;
            count += traverse(grid1, grid2, i, j, visited) ? 1 : 0;
        }
    }
    
    return count;
};

function traverse(grid1, grid2, i, j, visited) {
    
    let pos = i + "-" + j;
            
    if (i < 0 || i >= grid2.length || j < 0 || j >= grid2[0].length || !grid2[i][j]) return true;
    if (pos in visited) return grid1[i][j] == 1;
    
    visited[pos] = true;
    
    if (grid1[i][j] == 0) return false;
    
    let result = true;
    
    result &= traverse(grid1, grid2, i+1, j, visited);
    result &= traverse(grid1, grid2, i-1, j, visited);
    result &= traverse(grid1, grid2, i, j+1, visited);
    result &= traverse(grid1, grid2, i, j-1, visited)
        
    return result;
}