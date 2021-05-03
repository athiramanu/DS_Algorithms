/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let visitedMatrix = grid.map(row => row.map(col => false));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visitedMatrix[i][j] && grid[i][j]) {
                let tempMaxArea = {'area': 0}
                traverse(i, j, grid, visitedMatrix, tempMaxArea);
                maxArea = Math.max(maxArea, tempMaxArea.area);
            }
        }
    }

    return maxArea;
};

function traverse(i, j, grid, visitedMatrix, tempMaxArea) {
    if (visitedMatrix[i][j] || grid[i][j] == 0) return;
    
    visitedMatrix[i][j] = true;
    tempMaxArea.area++;
    
    if (i-1 >= 0) 
        traverse(i-1, j, grid, visitedMatrix, tempMaxArea);
    if (i+1 < grid.length)
        traverse(i+1, j, grid, visitedMatrix, tempMaxArea);
    if (j-1 >= 0)
        traverse(i, j-1, grid, visitedMatrix, tempMaxArea);
    if (j+1 < grid[0].length)
        traverse(i, j+1, grid, visitedMatrix, tempMaxArea);     
}