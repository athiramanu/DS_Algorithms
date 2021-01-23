/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    var length = nums.length;
    var result = new Array(nums.length).fill(-1);;
    var stack = [];
    var top = -1;
    
    nums.reverse()
    
    for (var i = 0; i < 2*length; i++) {
        
        if (top == -1) {
            stack.push(nums[i%length]);
            top++;
            continue;
        }
        
        while (stack[top] <= nums[i%length]) {
            stack.pop();
            top--;
        }
        
        if (top != -1) {
            result[i%length] = stack[top];
        }
        
        stack.push(nums[i%length]);
        top++;
    }

    return result.reverse();
};