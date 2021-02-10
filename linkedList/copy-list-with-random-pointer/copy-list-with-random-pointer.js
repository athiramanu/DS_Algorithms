/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function(head) {
    var t1, t2, temp, l2;
    var ref = {};
    var index = 0;
    
    t1 = head;
    while (t1) {
        t1['index'] = index;
        temp = new Node(t1.val, null, null);
        ref[index] = temp;
        if (typeof l2 == "undefined") {
            l2 = t2 = temp;
        } else {
            t2.next = temp;
            t2 = temp;
        }
        t1 = t1.next;
        index++;
    }
    
    t1 = head;
    t2 = l2;
    index = 0;
    while (t1) {
        if (t1.random) {
            t2.random = ref[t1.random.index];
        }
       
        t1 = t1.next;
        t2 = t2.next;
        index++;
    }
    
    return l2;
};