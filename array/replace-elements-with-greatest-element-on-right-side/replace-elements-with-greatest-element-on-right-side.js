/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var length = arr.length;
    var big = -1;
    var result = [];
    
    for (let i = length - 1; i >= 0; i--) {
        result.unshift(big);
        big = big > arr[i] ? big : arr[i]; 
    }
    
    return result
};