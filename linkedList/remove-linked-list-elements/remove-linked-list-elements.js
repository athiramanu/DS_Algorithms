/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    let newHead = {'val': '', 'next': head};
    let ptr1 = head, ptr2 = newHead;
    
    while (ptr1) {
        
        while (ptr1 && ptr1.val == val) {
            ptr1 = ptr1.next;
        }
        
        ptr2.next = ptr1;
        ptr2 = ptr2.next;
        
        if(ptr1) ptr1 = ptr1.next;
    }
    
    return newHead.next;
};