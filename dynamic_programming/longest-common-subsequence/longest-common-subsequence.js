function longestCommonSubsequence(str1, str2) {
    // Write your code here.
    let small = str1.length < str2.length ? str1 : str2;
    let big = str1.length < str2.length ? str2 : str1;

    let refArray = new Array(small.length+1).fill("");

    for (let bigIdx = 0; bigIdx < big.length; bigIdx++) {
        let newRefArray = [];

        newRefArray.push("");
        for (let smallIdx = 0; smallIdx < small.length; smallIdx++) {
            if (small[smallIdx] == big[bigIdx]) {
                newRefArray.push(refArray[smallIdx] + small[smallIdx]);
            }
            else {
                if (refArray[smallIdx + 1].length > newRefArray[smallIdx].length) {
                    newRefArray.push(refArray[smallIdx + 1]);
                } else {
                    newRefArray.push(newRefArray[smallIdx]);
                }
            }
        }

        for (let idx = 0; idx < newRefArray.length; idx++) {
            refArray[idx] = newRefArray[idx];
        }
    }

    return refArray.pop().split("");

}