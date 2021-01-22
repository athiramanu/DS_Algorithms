/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var n3;
    var stack = [];
    var top = -1;
    nums.reverse();
    
    for (var num of nums) {
        if (n3 && num < n3) {
            return true;
        }
        
        while(stack.length && stack[top] < num) {
            n3 = stack.pop();
            top--;
        }
        
        stack.push(num);
        top++;
    }
    
    return false;
};