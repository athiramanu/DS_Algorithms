/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    
    let start = 0, end;
    
    for (end = 0; end < nums.length; end++) {
        
        if (nums[end] == 0) k--;
        if (k < 0 && nums[start++] == 0) k++;
    }
    
    return end - start;
};