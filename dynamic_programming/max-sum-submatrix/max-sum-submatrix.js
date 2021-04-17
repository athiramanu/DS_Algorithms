function maximumSumSubmatrix(matrix, size) {
    // Write your code here.
    const height = matrix.length;
    const width = matrix[0].length;

    if (size > height || size > width) return -1;

    let matrixSum = [];
    populateMatrixSum(matrix, matrixSum, height, width);
    return findMaxSum(matrixSum, height, width, size);
}

function findMaxSum(matrixSum, height, width, size) {
    let maxSum = -Infinity;
    for (i = size - 1; i < height; i++) {
        for (j = size - 1; j < width; j++) {
            let sum;
            if (size - i == 1 && size - j == 1) {
                sum = matrixSum[i][j];
            }
            else if (size - i == 1) {
                sum = matrixSum[i][j] - matrixSum[i][j - size];
            }
            else if (size - j == 1) {
                sum = matrixSum[i][j] - matrixSum[i - size][j];
            }
            else {
                sum = matrixSum[i][j] -
                    matrixSum[i - size][j] -
                    matrixSum[i][j - size] + matrixSum[i - size][j - size];
            }
            maxSum = sum > maxSum ? sum : maxSum;
        }
    }
    return maxSum;
}

function populateMatrixSum(matrix, matrixSum, height, width) {
    for (let i = 0; i < height; i++) {
        matrixSum[i] = new Array(width).fill(0);
    }

    for (let j = 0; j < width; j++) {
        matrixSum[0][j] = (matrixSum[0][j - 1] || 0) + matrix[0][j];
    }

    for (let i = 1; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (j == 0) {
                matrixSum[i][j] = matrix[i][j] + matrixSum[i - 1][j];
            } else {
                matrixSum[i][j] =
                    matrix[i][j] + matrixSum[i - 1][j] + matrixSum[i][j - 1] - matrixSum[i - 1][j - 1];
            }
        }
    }
}