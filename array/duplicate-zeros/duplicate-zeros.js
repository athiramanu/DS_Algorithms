/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    let length = arr.length;
    let end = 0, count = 0;
    
    for (end = 0; count < length; end++, count++) {
        if (arr[end] == 0) count++;
    }
    
    length--;
    end--;
    
    if (count > length+1) {
        arr[length--] = arr[end--]
    }
    
    while (end < length && end >= 0) {
        if (arr[end] == 0) {
            arr[length--] = arr[length--] = arr[end--];
        } else {
            arr[length--] = arr[end--];
        }
    }
};