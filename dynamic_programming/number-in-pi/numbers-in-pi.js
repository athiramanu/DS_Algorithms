function numbersInPi(pi, numbers) {
    // Write your code here.
    if (pi.length <= 1) return -1;
    const lookupTable = {};
    for (let num of numbers) {
        lookupTable[num] = true;
    }
    const result = getMinSpaces(pi, lookupTable, {}, 0);
    return result == Infinity ? -1 : result;
}

function getMinSpaces(pi, lookupTable, cache, idx) {
    if (idx == pi.length) return -1;
    if (idx in cache) return cache[idx];
    let minSpaces = Infinity;

    for (let i = idx; i < pi.length; i++) {
        const prefixPi = pi.slice(idx, i + 1);
        if (prefixPi in lookupTable) {
            const minSpaceInSuffix = getMinSpaces(pi, lookupTable, cache, i + 1);
            minSpaces = Math.min(minSpaces, minSpaceInSuffix + 1);
        }
    }

    cache[idx] = minSpaces;

    return cache[idx];
}