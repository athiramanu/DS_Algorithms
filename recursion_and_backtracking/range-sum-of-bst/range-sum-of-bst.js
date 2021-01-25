/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var sum = 0;

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high, init = true) {
    if (init) {
        sum = 0;
    }
    if (root) {
        (root.val > low) && rangeSumBST(root.left, low, high, false);
        sum += (root.val >= low && root.val <= high) ? root.val : 0;
        (root.val < high) && rangeSumBST(root.right, low, high, false);
    }
    
    return sum;
};