/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root, level = 0, result = []) {
    
    if (!root) return result;
    
    if (result[level] == undefined) result[level] = [];
    
    result[level].push(root.val);
    
    for (let child of root.children) {
        
        levelOrder(child, level+1, result)
        
    }
    
    return result;
};