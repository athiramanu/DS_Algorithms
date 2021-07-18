/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    let ptr1 = head, ptr2 = head;
    
    while(n-- > 0) ptr2 = ptr2.next;
    
    if (!ptr2) return head.next;
    
    while (ptr2) {
        
        if (ptr2.next == null) 
            ptr1.next = ptr1.next.next;
        
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    
    return head;
};