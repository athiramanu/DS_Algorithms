/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    
    for (let oddPtr = 0, evnPtr = 0; evnPtr < nums.length; evnPtr++) {
        
        if (nums[evnPtr] % 2 == 0) {
         
            let temp = nums[oddPtr];
            
            nums[oddPtr++] = nums[evnPtr];   
            nums[evnPtr] = temp;
        }
    }
    
    return nums;
};