
function knapsackProblem(items, capacity) {
    // Write your code here.
    // Replace return below.

    items.unshift([0, 0])
    let dpMatrix = [];

    for (let i = 0; i < items.length; i++) {
        const row = new Array(capacity + 1).fill(0);
        dpMatrix.push(row);
    }

    for (let i = 1; i < items.length; i++) {
        let value = items[i][0];
        let weight = items[i][1];

        for (let cw = 0; cw <= capacity; cw++) {
            if (weight > cw) {
                dpMatrix[i][cw] = dpMatrix[i - 1][cw];
            } else {
                dpMatrix[i][cw] = Math.max(dpMatrix[i - 1][cw],
                    dpMatrix[i - 1][cw - weight] + value);
            }
        }

    }

    items.shift();

    let result = [];
    let i = dpMatrix.length - 1;
    let j = dpMatrix[0].length - 1;
    while (i > 0) {
        if (dpMatrix[i][j] == dpMatrix[i - 1][j]) {
            i -= 1
        } else {
            result.unshift(i - 1);
            j -= items[i - 1][1]
            i -= 1;
        }
        if (j == 0) break;
    }

    return [dpMatrix.pop().pop(), result];
}