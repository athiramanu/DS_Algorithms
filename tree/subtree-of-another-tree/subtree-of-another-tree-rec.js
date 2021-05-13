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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    
    if (root == null) return false
    
    else if (checkIfSubtree(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function checkIfSubtree(node, subRoot) {
    
    if (node == null && subRoot == null) 
        return true;
    
    else if (node == null || subRoot == null) 
        return false;
    
    
    return node.val == subRoot.val && 
        checkIfSubtree(node.left, subRoot.left) && 
        checkIfSubtree(node.right, subRoot.right);
}