/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    
    if (!head) return null;
    
    let ptr1 = head, ptr2 = head, length = 0;
    
    while(ptr1.next) {
        ptr1 = ptr1.next;
        length++;
    }
    
    length = length & 1 ? (length+1)/2 : length/2;
        
    while (length--) {
        ptr1.next = ptr2.next;
        ptr1 = ptr1.next;
        ptr2.next = ptr2.next.next;
        ptr2 = ptr2.next;
        ptr1.next = null;   s
    }
    
    return head;
};