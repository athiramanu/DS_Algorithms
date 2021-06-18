/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var numSubarrayBoundedMax = function(nums, left, right) {
    
    let start = -1;
    let sum = 0;
    let prev = 0;
    
    nums.forEach((num, index) => {
        
        if (num < left) {
            sum += prev;
        }
        
        else if (num > right) {
            start = index;
            prev = 0;
        }
        
        else {
            prev = index - start;
            sum += prev
        }        
    })
    
    return sum;
};