/**
 * @param {string} string
 * @return {number}
 */
 var minCut = function(string) {
    // Write your code here.
    const length = string.length;
    let matrix = [];
    let cuts = new Array(string.length).fill(Infinity);
    createMatrix(length, matrix);
    fillMatrix(length, matrix, string);
    makeCuts(matrix, cuts, string);
    return cuts.pop();
};

function makeCuts(matrix, cuts, string) {
    cuts[0] = 0;

    for (let i = 1; i < string.length; i++) {
        if (matrix[0][i]) {
            cuts[i] = 0;
            continue;
        }
        cuts[i] = cuts[i - 1] + 1;
        for (let j = 1; j < i; j++) {
            if (matrix[j][i] && cuts[j - 1] + 1 < cuts[i]) {
                cuts[i] = cuts[j - 1] + 1;
            }
        }
    }
}

function createMatrix(length, matrix) {
    for (let i = 0; i < length; i++) {
        matrix[i] = [];
        for (let j = 0; j < length; j++) {
            matrix[i][j] = (i == j);
        }
    }
}

function fillMatrix(length, matrix, string) {
    for (let i = 2; i < length + 1; i++) {
        for (let j = 0; j < length - i + 1; j++) {
            let k = j + i - 1;
            if (i == 2) {
                matrix[j][k] = string[j] == string[k];
            } else {
                matrix[j][k] = string[j] == string[k] && matrix[j + 1][k - 1];
            }
        }
    }
}
