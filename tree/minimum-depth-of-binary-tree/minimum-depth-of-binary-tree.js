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
 var minDepth = function(root) {
    if (!root) return 0;
    
    return getMinDepth(root);
};

function getMinDepth(node) {
    
    if (node == null)
        return Infinity;
    
    if (node.left == null && node.right == null) 
        return 1;
    
    return Math.min(getMinDepth(node.left), getMinDepth(node.right)) + 1;
}