function maxSumIncreasingSubsequence(array) {
    // Write your code here.

    let sumArray = array.map(num => num);
    let sequence = new Array(array.length).fill(null);
    let maxIdx = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i] &&
                sumArray[j] + array[i] > sumArray[i]) {
                sumArray[i] = sumArray[j] + array[i];
                sequence[i] = j;
            }
        }

        if (sumArray[i] > sumArray[maxIdx]) {
            maxIdx = i;
        }
    }

    let longestSequence = [];
    let idx = maxIdx;

    while (true) {
        longestSequence.unshift(array[idx]);
        idx = sequence[idx];
        if (sequence[idx] == null) {
            array[idx] != null && longestSequence.unshift(array[idx]);
            break
        }
    }

    return [sumArray[maxIdx], longestSequence]
}