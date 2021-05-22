/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var lowestCommonAncestor = function(p, q) {
    return traverse(p, q);
};

function traverse(node1, node2) {
    
    if (!node1 && !node2) return null;
    
    if (node1) {
        if (node1.found) return node1;
        node1.found = true;
        node1 = node1.parent;
    } 
    
    if (node2) {
        if (node2.found) return node2;
        node2.found = true;
        node2 = node2.parent;
    }
    
    return traverse(node1, node2);
}