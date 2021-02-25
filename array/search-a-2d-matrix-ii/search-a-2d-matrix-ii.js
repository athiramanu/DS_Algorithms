/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m,n, i, j;
    
    m = matrix.length;
    n =  matrix[0].length;
    
    i = 0;
    j = n-1;
        
    while (i<m && j<n) {
        if (matrix[i][j] == target) {
            return true;
        }
        if (matrix[i][j] > target) {
            j--;
        }
        else {
            i++;
        }
    }
    
    return false;
};