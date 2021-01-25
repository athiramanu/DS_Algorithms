/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var result, pointer;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root, init = true) {   
    
    if (init) {
        result = null;
    }
    
    if (root) {
        
        increasingBST(root.left, false);
                
        if (result) {
            let node = new TreeNode(root.val);
            pointer.right = node;
            pointer = node;
        } else {
            result = new TreeNode(root.val);
            pointer = result;
        }
        
        increasingBST(root.right, false);
    }
    
    return result;
};