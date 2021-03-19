/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
    let length = nums.length, i = 1;
    
    while(nums[i] == nums[i-1]) i++;
    
    let up = nums[i] > nums[i-1], ans = 1;
    
    while (i < length) {
        if ((up && nums[i] > nums[i-1]) || (!up && nums[i] < nums[i-1])) {
            up = !up;
            ans++;
        }
        i++;
    }
    
    return ans;
};