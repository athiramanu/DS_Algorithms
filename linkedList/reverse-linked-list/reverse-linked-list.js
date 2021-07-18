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
 var reverseList = function(head) {
    
    let ptr1 = head;

    while (head && head.next) {
        
        let temp = head.next;
        
        head.next = head.next.next;
        temp.next = ptr1;
        
        ptr1 = temp;
    }
    
    return ptr1;
};