/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var num1 = getNum(l1);
    var num2 = getNum(l2);
    var r3, q, temp, head;
    
    r3 = 0;
    
    while (num1.length || num2.length || r3) {
        q = (num1.pop() ?? 0) + (num2.pop() ?? 0) + r3;
        r3 = Math.floor(q/10);
        
        temp = new ListNode((q%10), head);
        head = temp;

    }
    
    return head ?? new ListNode(0, null);
};
    
var getNum = function(l) {
    var num = [];
    let p = l;
    while(p) {
        num.push(p.val);
        p = p.next;
    }
    return num;
}