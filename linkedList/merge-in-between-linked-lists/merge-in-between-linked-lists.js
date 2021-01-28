/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    var prev1, prev2;
    var p = list1;
    var index = -1;
    
    while (p) {    
        index++;
        if (index+1 == a) {
            prev1 = p;

        } else if (index == b) {
            prev2 = p;
        }
        
        
        p = p.next;
    }
    
    p = list2;
    
    while (p.next) {
        p = p.next;
    }

    prev1.next = list2;
    p.next = prev2.next;
    prev2.next = null;
    
    return list1;
};