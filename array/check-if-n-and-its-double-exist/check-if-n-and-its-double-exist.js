/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    
    let seen = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        
        let double = 2*arr[i];
        let half = arr[i]/2;
        
        if (seen.has(double) || seen.has(half)) return true;
        
        seen.add(arr[i]);
    }
    
    return false;
};