/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root, result = []) {
    
    if (!root) return result;
    
    result.push(root.val);
    
    for (let child of root.children) preorder(child, result);
    
    return result;
};