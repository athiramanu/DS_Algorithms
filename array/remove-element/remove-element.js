/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    let start = 0, end = nums.length-1, swaps = 0;
        
    while (start <= end) {
        
        if (nums[start] == val) {
            
            while (nums[end] == val && end >= 0) end--;
            
            if (end <= start) break;
            
            nums[start++] = nums[end--];
        }
        
        else start++;
    }
    
    return start;
};