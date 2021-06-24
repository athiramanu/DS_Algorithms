/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, r0, c0, color) {
    
    dfs(grid, r0, c0, grid[r0][c0]);
        
    grid.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (grid[rowIdx][colIdx] < 0) 
                grid[rowIdx][colIdx] = color
        });
    });
    
    return grid;
};


function dfs(grid, r, c, color) {
    
    if (r < 0 || r > grid.length-1 || c < 0 || c > grid[0].length-1 || grid[r][c] != color)
        return;
    
    grid[r][c] = -color;
    
    dfs(grid, r - 1, c, color);
    dfs(grid, r + 1, c, color);
    dfs(grid, r, c - 1, color);
    dfs(grid, r, c + 1, color);
    
    if (r > 0 && r < grid.length-1 && c > 0 && c < grid[0].length-1 && 
        Math.abs(grid[r-1][c]) == color && 
        Math.abs(grid[r+1][c]) == color && 
        Math.abs(grid[r][c-1]) == color && 
        Math.abs(grid[r][c+1]) == color
    )
        grid[r][c] = color;
}