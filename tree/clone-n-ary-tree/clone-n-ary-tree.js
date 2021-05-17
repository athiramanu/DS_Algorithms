/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
 var cloneTree = function(root) {
    
    if (!root) return null;
    
    let clone = new Node(root.val);
    
    for (let child of root.children) {
        clone.children.push(cloneTree(child));
    }
    
    return clone;
};