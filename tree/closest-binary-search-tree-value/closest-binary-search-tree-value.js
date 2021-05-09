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
 * @param {number} target
 * @return {number}
 */
 var closestValue = function(root, target) {   
    
    let nextRoot = target < root.val ? root.left : root.right;
    
    if (!nextRoot) return root.val;
    
    let nextVal = closestValue(nextRoot, target);
    
    return Math.abs(root.val-target) < Math.abs(nextVal-target) ? root.val : nextVal;
};