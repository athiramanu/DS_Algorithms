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
 var bstToGst = function(root) {
    convert(root);
    return root;
};

function convert(root, sum = 0) {
    if (!root) return sum;
    root.val += convert(root.right, sum);
    return convert(root.left, root.val);
}