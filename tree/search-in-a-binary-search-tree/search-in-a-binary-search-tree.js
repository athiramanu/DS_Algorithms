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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let found = null;
    
    if (!root) return null;
    
    if (root.val == val) return root;
    
    if (root.val > val)
        found = searchBST(root.left, val);
    else
        found = searchBST(root.right, val);
        
    return found;
};