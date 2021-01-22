/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var dict = {};
    var stack = [];
    var result = [];
    var top = -1;
    
    nums2.reverse();
    
    for (var num of nums2) {
        if (top == -1) {
            stack.push(num);
            top++;
            dict[num] = -1;
            continue;
        }
        
        while (num > stack[top]) {
            stack.pop();
            top--;
        }
        
        dict[num] = -1;
        
        if (top!=-1) {
            dict[num] = stack[top];
        }
        
        stack.push(num);
        top++;
    } 
    
    for (num of nums1) {
        result.push(dict[num]);
    }
    
    return result;
};