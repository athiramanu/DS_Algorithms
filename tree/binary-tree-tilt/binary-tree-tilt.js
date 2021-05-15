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
 var findTilt = function(root, parent = null) {
        
    if (!root) return 0;
        
    let result = findTilt(root.left, root) + findTilt(root.right, root);
    
    let leftVal = root.left ? root.left.val : 0;
    let rightVal = root.right ? root.right.val : 0;
    
    if (parent) parent.val += root.val;
        
    result += Math.abs(leftVal - rightVal);
    
    return result;
};