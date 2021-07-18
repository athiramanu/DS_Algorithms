/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    let ptr1, ptr2;
    
    if (!head) return false;
    
    ptr1 = head;
    ptr2 = head.next;
    
    while (ptr1 && ptr2) {
        
        if (ptr1 == ptr2) return true;
        
        ptr1 = ptr1.next;
        
        if (ptr2.next) ptr2 = ptr2.next.next;
        else break;
    }
    
    return false;
};