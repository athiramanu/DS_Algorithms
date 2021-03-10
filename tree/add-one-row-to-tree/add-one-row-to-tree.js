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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    let head = root;
    
    if (d == 1) {
        return new TreeNode(v, root, null);
    }
    
    var traverse = function(root, level) {
        if (level+1 == d) {
            var nodeL = new TreeNode(v, root.left, null);
            var nodeR = new TreeNode(v, null, root.right);
            root.left = nodeL;
            root.right = nodeR;
        }
        root.left && traverse(root.left, level+1);
        root.right && traverse(root.right, level+1);
    }
    
    traverse(root, 1);

    return head;
};