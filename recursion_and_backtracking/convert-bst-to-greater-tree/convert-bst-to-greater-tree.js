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
 * @return {TreeNode}
 */
var sum = 0;
var result;

var convertBST = function(root, first = true) {
    if (first) {
        result = root;
        sum = 0;
    }
    if (root) {
        convertBST(root.right, false);
        sum += root.val
        root.val = sum;
        convertBST(root.left, false);
    }
    
    return result;
};