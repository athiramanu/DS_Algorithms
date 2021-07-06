/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {
    
    return atMost(nums, goal) - atMost(nums, goal-1);   
};

function atMost(nums, goal) {
    
    if (goal < 0) return 0;
    
    let start = 0, end = 0, result = 0;
    
    while (end < nums.length) {
        
        goal -= nums[end++];
        
        while (goal < 0) 
            goal += nums[start++];
        
        result += end - start;        
    }
    
    return result;
}