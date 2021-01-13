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
var inorderTraversal = function(root) {
    var stack = [];
    var output = [];
    var current = root;
    
    while (current != null || stack.length !== 0) {
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        
        
        current = stack.pop();
        output.push(current.val);
        current = current.right;
    }
     
    return output;
};