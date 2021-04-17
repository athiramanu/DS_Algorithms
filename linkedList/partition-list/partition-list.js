/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let start, s, curr, newhead;
    
    start = new ListNode();   
    newhead = new ListNode(0, head);
    
    s = start;
    head = newhead;

    while(head.next) {           
        if(head.next.val < x) {
            s.next = head.next;
            s = head.next;
            head.next = head.next.next
            s.next = null;
            continue
        }        
        head = head.next;
    }
    
    s.next = newhead.next
   
    return start.next;
};