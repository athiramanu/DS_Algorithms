function maxSubsetSumNoAdjacent(array) {
    if (array.length == 0)
        return 0;
    else if (array.length == 1)
        return array[0];
    let nonAdjSum = array[0];
    let prevSum = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        let currentSum = Math.max(nonAdjSum + array[i], prevSum);
        nonAdjSum = prevSum;
        prevSum = currentSum
    }

    return prevSum;
}

