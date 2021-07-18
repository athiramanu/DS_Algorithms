/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    
    let ptr1 = 0, ptr2;
        
    while (ptr1 < nums.length && nums[ptr1] != 0) ptr1++;
    
    ptr2 = ptr1+1;
    
    while (ptr2 < nums.length && ptr1 < nums.length) {
        
        if (nums[ptr2]  != 0) {
            nums[ptr1] = nums[ptr2];
            nums[ptr2] = 0;
            
            while (ptr1 < nums.length && nums[ptr1] != 0) ptr1++;
        }        
        ptr2++;
    }
    
    return nums;
};