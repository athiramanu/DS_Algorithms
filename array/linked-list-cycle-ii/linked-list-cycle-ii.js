/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    
    let ptr1, ptr2;
        
    ptr1 = ptr2 = head;
        
    while (ptr1 && ptr2) {
        
        ptr1 = ptr1.next;
        
        if (ptr2.next) ptr2 = ptr2.next.next;
        else return null;
        
        if (ptr1 == ptr2) break;
    }
    
    ptr1 = head;
    
    while (ptr1 && ptr2) {
        
        if (ptr1 == ptr2) return ptr1;
        
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    
    return null
};