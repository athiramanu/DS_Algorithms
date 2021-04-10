var max = 1;

var traverse = function(matrix, arr, i, j, r = 1) {
    let top = i - 1, bottom = i + 1, left = j - 1, right = j + 1;
    
    arr[i][j] = r;
    
    if (r > max) max = r;
    
    if (matrix[top] && matrix[top][j] > matrix[i][j] && r+1 > arr[top][j] ) {
        traverse(matrix, arr, top, j, r+1);
    }
    if (matrix[bottom] && matrix[bottom][j] > matrix[i][j] && r+1 > arr[bottom][j]) {
        traverse(matrix, arr, bottom, j, r+1);
    }
    if (matrix[i][left] && matrix[i][left] > matrix[i][j] && r+1 > arr[i][left]) {
        traverse(matrix, arr, i, left, r+1);
    }
    if (matrix[i][right] && matrix[i][right] > matrix[i][j] && r+1 > arr[i][right]) {
        traverse(matrix, arr, i, right, r+1);
    }    
}

var longestIncreasingPath = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let arr =  new Array(m).fill(-1).map(row => new Array(n).fill(-1));
    
    max = 1;
        
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] == -1 && traverse(matrix, arr, i, j, 1);
        }
    }    
    
    return max;
};