/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var result = 0;
    var diff, i, j;
    
    if (A.length < 3) {
        return result;
    }
    
    for (i = 1, j = 0; i < A.length; i++) {
        if (isNaN(diff)) {
            diff = A[i] - A[i-1];
        }
        else if ((A[i] - A[i-1]) != diff) {
            result += getCombinationCount(i-j);
            j = i-1;
            diff = A[i] - A[i-1];   
        }
    }
    
    result += getCombinationCount(i-j);
    
    return result;
};


var getCombinationCount = function(count) {
    var comb = 0;
    var i = 1;
    
    while (count  >= 3) {
        comb += i;
        count--;
        i++;
    }
    return comb;
}
