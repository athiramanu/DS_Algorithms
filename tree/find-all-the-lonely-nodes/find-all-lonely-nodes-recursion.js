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
 * @return {number[]}
 */
 var getLonelyNodes = function(root) {
    
    let lonelyNodes = [];
    
    getAllLonelyNodes(root, false, lonelyNodes);
    
    return lonelyNodes;
};

function getAllLonelyNodes(node, isLonely, lonelyNodes) {
    
    if (node == null) return;
    
    if (isLonely) lonelyNodes.push(node.val);
    
    getAllLonelyNodes(node.left, node.right == null, lonelyNodes);
    getAllLonelyNodes(node.right, node.left == null, lonelyNodes);
}