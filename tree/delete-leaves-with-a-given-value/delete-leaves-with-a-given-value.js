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
 * @return {TreeNode}
 */
 var removeLeafNodes = function(root, target, parent = null, dir = null) {
    
    if (!root) return;
    
    removeLeafNodes(root.left, target, root, "left");
    removeLeafNodes(root.right, target, root, "right");
    
    if (root.val == target && !root.left && !root.right) {
        if (parent) parent[dir] = null;
        else return null;
    }
    
    return root;
};