/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
 var checkArithmeticSubarrays = function(nums, l, r) {
    
    let result = [];
    
    for (let i = 0; i < l.length; i++) {
        result.push(isArithmetic(nums.slice(l[i], r[i]+1)));
    }
    
    return result;
};

function isArithmetic(nums) {
    
    let numSet = new Set(nums);
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    if (nums.length != numSet.size) return max == min;
    
    if ( (max-min) % (nums.length-1)) return false;
    
    let diff = (max - min) / (nums.length-1);

    for (let i = min; i < max; i += diff) {
        if (!numSet.has(i)) return false;
    }
    
    return true;
}