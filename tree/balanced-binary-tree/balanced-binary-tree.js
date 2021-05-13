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
 * @return {boolean}
 */

 var isBalanced = function(root) {
    return checkBalanced(root) != -1;
};

function checkBalanced(root, height = 0) {
    if (root == null) return height;
    
    let leftHeight = checkBalanced(root.left, height+1);
    let rightHeight = checkBalanced(root.right, height+1);
        
    if (leftHeight == -1 ||rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) 
        return -1;
    
    return Math.max(leftHeight, rightHeight);
}