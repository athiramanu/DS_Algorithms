/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    let ptr1, ptr2 = null, length = 0;
    
    ptr1 = head;
    
    while (ptr1) {
        ptr1 = ptr1.next;
        length++;
    }
    
    let skip = length % 2;
    
    length = Math.floor(length/2);
    
    ptr1 = head;
    
    while (length--) {
        let temp = ptr1;
        ptr1 = ptr1.next;
        temp.next = ptr2;
        ptr2 = temp;   
    }
    
    if (skip) ptr1 = ptr1.next;
    
    while (ptr1 && ptr2) {
        if (ptr1.val != ptr2.val) return false;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    
    return true
};
