/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    
    let inc = true, i, j;
    
    if (arr.length < 3) return false;
    
    if (arr[1] <= arr[0]) return false;
    
    for (i = 1; i < arr.length-2; i++)
        if (arr[i] >= arr[i+1]) break;
        
    for (j = i; j < arr.length-1; j++) 
        if (arr[j] <= arr[j+1]) return false
    
    return true;
};