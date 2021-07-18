/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    let ptr1 = 0, ptr2 = 1;

    while (ptr2 < nums.length) {
        
        while(nums[ptr2] == nums[ptr1]) ptr2++
        
        if (ptr2 == nums.length) break;
        
        nums[++ptr1] = nums[ptr2++];
    }
        
    return ptr1+1;
};