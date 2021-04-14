/**
 * @param {number} width
 * @param {number} height
 * @return {number}
 */
 var uniquePaths = function(width, height) {
    let matrix = new Array(height).fill(new Array(width).fill(-1));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i - 1 < 0 || j - 1 < 0) matrix[i][j] = 1;
            else matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix.pop().pop();
};