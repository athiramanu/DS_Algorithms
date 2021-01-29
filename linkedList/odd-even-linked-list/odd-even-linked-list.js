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
    var length = 0;
    var tail = head
    
    while(tail && tail.next){
        length++;
        tail = tail.next;
    }
    length++;
    
    var p = head;
    var temp;
    var index = 1;
    
    if (length <= 2) {
        return head;
    }
    
    length  = length % 2 == 0 ? length/2 : (length-1)/2;
        
    while (length && p && p.next) {
        temp = p.next;
        p.next = temp.next;
        temp.next = null;
        tail.next = temp;
        tail = temp;
        p = p.next;
        length--        
    }
    
    return head;
};