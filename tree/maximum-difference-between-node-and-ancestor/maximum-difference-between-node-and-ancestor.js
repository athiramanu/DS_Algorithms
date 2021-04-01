/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxAncestorDiff = function(root) {    
    
    return getMaxDiff(root, root.val, root.val);  
};

function getMaxDiff(root, max, min) {
    
    if (!root) return max - min;
    
    max = Math.max(max, root.val);
    min = Math.min(min, root.val);
    
    return Math.max(getMaxDiff(root.left, max, min), getMaxDiff(root.right, max, min))   
}