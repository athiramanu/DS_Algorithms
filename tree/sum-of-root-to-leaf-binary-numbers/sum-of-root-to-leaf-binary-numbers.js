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
 var sumRootToLeaf = function(root, val = 0) {
    if (!root) return 0;
    val = 2*val + root.val;
    return root.left == root.right ? val : sumRootToLeaf(root.left, val) + sumRootToLeaf(root.right, val);
};