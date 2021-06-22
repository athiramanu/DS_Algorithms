/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    
    let stack = [-Infinity, -Infinity, -Infinity];
    
    for (let num of nums) {
        
        if (stack[0] == num || stack[1] == num || stack[2] == num) 
            continue;

        for (let i = 2; i >= 0; i--) {            
            
            if (stack[i] > num) break;
            else {
                stack[i+1] = stack[i];
                stack[i] = num;
            }
        }
    }
    
    return stack[2] != -Infinity ? stack[2] : stack[0];
};