/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0, i, j = 0;
    let zeroIdx = -1;
    
    for (i = 0; i < nums.length; i++) {
        
        if (nums[i]) continue;
     
        count = Math.max(count, i - j);
        
        j = zeroIdx + 1;
            
        zeroIdx = i;
    }
    
    return Math.max(count, i - j);
};