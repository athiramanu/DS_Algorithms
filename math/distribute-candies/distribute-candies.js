/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    var n = candyType.length/2;
    var uniq = new Set(candyType);
    
    return n < uniq.size ? n : uniq.size;
};