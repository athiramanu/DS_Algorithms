/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(str1, str2) {
    let small = str1.length < str2.length ? str1 : str2;
    let big = str1.length < str2.length ? str2 : str1;
    refArray = [0];

    for (let sIdx in small) refArray.push(sIdx + 1);

    for (let sIdx = 0; sIdx < big.length; sIdx++) {
        let newRefArray = [refArray[0] + 1];
        for (let sIdx2 = 0; sIdx2 < small.length; sIdx2++) {
            if (small[sIdx2] == big[sIdx])
                newRefArray.push(refArray[sIdx2])
            else
                newRefArray.push(
                    Math.min(newRefArray[sIdx2],
                        refArray[sIdx2],
                        refArray[sIdx2 + 1]) + 1
                )
        }

        for (let i in newRefArray) {
            refArray[i] = newRefArray[i];
        }
    }
    return refArray.pop();
};