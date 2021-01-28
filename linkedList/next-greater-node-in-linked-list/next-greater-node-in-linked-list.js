/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    var input = [];
    var length = 0;
    var result = [];
    var stack = [];
    var top = -1;
    
    while (head) {
        input.push(head.val);
        head = head.next;
        length++;
    }
    
    for (var i = length - 1; i >= 0; i--) {
        if (top == -1) {
            result.push(0);
        }
        
        else {
            while (stack[top] <= input[i]) {
                stack.pop();
                top--;
            }
            
            if (top != -1) {
                result.push(stack[top]);
            } 
            else {
                result.push(0);
            }
            
        }
        
        
        stack.push(input[i])
        top++;
    }
    
    return result.reverse();
};