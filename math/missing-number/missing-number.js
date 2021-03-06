/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = nums.length * (nums.length + 1)/2;
    
    for (var i of nums) {
        sum -= i;
    }
    
    return sum;
};