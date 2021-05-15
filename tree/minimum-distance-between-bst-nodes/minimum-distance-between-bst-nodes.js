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
 var minDiffInBST = function(root) {
    
    return getMinDiff(root)[1];
};

function getMinDiff(root, min = Infinity, pre = null) {
    
    if (root.left != null)  [pre, min] = getMinDiff(root.left, min, pre);
    
    if (pre != null) min = Math.min(min, root.val - pre);
    
    pre = root.val;
    
    if (root.right != null) [pre, min] = getMinDiff(root.right, min, pre);
    
    return [pre, min]
}