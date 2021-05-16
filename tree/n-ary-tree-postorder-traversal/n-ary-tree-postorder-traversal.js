/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root, result = []) {
    
    if (!root) return result;
    
    for (let child of root.children) postorder(child, result);
    
    result.push(root.val);
    
    return result;
};