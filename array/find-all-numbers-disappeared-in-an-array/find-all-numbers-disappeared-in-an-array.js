/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    
    let result = [];
    
    nums.forEach(num => {
       
        num = Math.abs(num) - 1;
        
        if (nums[num] > 0) nums[num] *= -1;
    });
    
    nums.forEach((num, index) => {

        if (num > 0) result.push(index+1);
    
    });
    
    return result;
};