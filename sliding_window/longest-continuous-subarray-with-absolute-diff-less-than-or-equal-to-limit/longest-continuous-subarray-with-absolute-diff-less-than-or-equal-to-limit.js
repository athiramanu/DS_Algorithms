/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {
    
    let maxQ = [], minQ = [];
    let i = 0;
    
    for (let num of nums) {
        
        while (maxQ.length && maxQ[maxQ.length-1] < num)
            maxQ.pop();
        
        while (minQ.length && minQ[minQ.length-1] > num)
            minQ.pop();
        
        maxQ.push(num);
        minQ.push(num);
        
        if (maxQ[0] - minQ[0] > limit) {
            if (maxQ[0] == nums[i]) maxQ.shift();
            if (minQ[0] == nums[i]) minQ.shift();
            i++;
        }
    }
    
    return nums.length - i;
    
};