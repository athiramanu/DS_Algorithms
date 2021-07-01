/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numberOfSubarrays = function(nums, k) {
    
    return atMost(nums, k) - atMost(nums, k-1);
    
};

function atMost(nums, k) {
    
    let i = 0, result = 0;
    
    for (let j = 0; j < nums.length; j++) {
        
        k -= nums[j] % 2;
        
        while ( k < 0) {
            k += nums[i++] % 2;
        }
        
        result += j - i + 1;
    }
    
    return result;
}