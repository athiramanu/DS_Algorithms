/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    var stack = [];
    var top = -1;
    var h, t, temp;
    
    while (head) {
        temp = new Node(head.val);
        
        if (!h) {
            h = t = temp;
        } else {
            temp.prev = t;
            t.next = temp;
            t = temp;
        }

        stack.push(head);
        top++;
        
        if (head.child) {
            temp = head;
            head = head.child;
            temp.child = null;
            stack[top] = temp;
        } else if (head.next) {
            temp = head;
            head = head.next;
            temp.next = null;
            stack[top] = temp;
        } else {
            head = null;
        }
        
        if (!head) {
            while(top > -1) {
                head = stack.pop();
                top--;
                if (head && head.next) {
                    
                    stack.push(head.next);
                    top++;
                    
                    head = head.next;
                    break;
                }
            }
        }  
        
        if (top == -1) {
            break;
        }
    }
    
    return h;  
};