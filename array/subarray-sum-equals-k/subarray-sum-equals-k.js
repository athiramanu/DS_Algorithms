/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map(), sum = 0, result = 0;
    map.set(0,1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        let diff = sum - k;
        
        if (map.has(diff)) result += map.get(diff);
        
        map.set(sum, (map.get(sum) || 0) + 1);        
    }
    
    return result
};