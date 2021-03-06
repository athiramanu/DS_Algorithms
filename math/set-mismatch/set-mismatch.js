/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var n = nums.length;
    var sum = n*(n+1)/2;
    var dup;
    var map = {};
    
    for (var i of nums) {
        sum -= i;
        if(map[i]) {
            dup = i;
        } else {
            map[i] = true;
        }
    }
        
    return [dup, dup + sum];
};