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
    let stack = [root];
        
    while(stack.length > 0) {
        let node = stack.pop();
        if (node.left) {
            stack.push(node.left);
            node.right == null && lonelyNodes.push(node.left.val)
        }
        if (node.right) {
            stack.push(node.right);
            node.left == null && lonelyNodes.push(node.right.val)
        }
    }
    
    return lonelyNodes;
};