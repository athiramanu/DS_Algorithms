/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    let length = nums.length;
    let start = 0, end = length - 1;

    while (start <= end) {
        
        while (nums[start] != val && start < length) start++;
        
        while (nums[end] == val && end > start) end--;
        
        if (end >= start) nums[start++] = nums[end--];        
    }
    
    return end + 1;
};