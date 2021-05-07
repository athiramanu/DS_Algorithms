/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    sortIndices(horizontalCuts, verticalCuts)
    let maxLength = getMaxCut(horizontalCuts, h);
    let maxWidth = getMaxCut(verticalCuts, w);
    return (maxLength * maxWidth)%(10**9 + 7);
};

function getMaxCut(cuts, endIdx) {
    let maxLength = -1;
    
    for (let idx = -1; idx < cuts.length; idx++) {
        let cut1 = cuts[idx] || 0;
        let cut2 = cuts[idx+1] || endIdx;
        maxLength = Math.max(maxLength, cut2-cut1);
    }
    return maxLength;
}

function sortIndices(horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b) => a-b)
    verticalCuts.sort((a,b) => a-b);
}