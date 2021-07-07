/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    
    let start = 0, end, sum = 0;
    let minSize = Infinity;
    
    for (end = 0; end < nums.length; end++) {
        
        sum += nums[end];
        
        if (sum < target) continue;
        
        else if (sum > target) {
            while (sum - nums[start] >= target) {
                sum -= nums[start];
                start++;
            }
        }
        
        minSize = Math.min(minSize, end - start + 1);
        sum -= nums[start];
        start++;
    }
    
    return minSize == Infinity ? 0 : minSize;
    
};