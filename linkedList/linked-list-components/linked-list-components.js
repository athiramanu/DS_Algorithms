/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    var map = {};
    var result = 0;
    var count = 0;
    
    for (var g of G) {
        map[g] = true;
    }
    
    while(head) {
        count = 0;

        while (head && head.val in map) {
            count++;
            head = head.next;
        }
                
        if (count >= 1) {
            result++;
        }
       
        if (!head) {
            break;
        }
        
        head = head.next;
    }
        
    return result;
};