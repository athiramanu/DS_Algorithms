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
var postorderTraversal = function(root) {
    var stack = [];
    var result = [];
    var current = root;
    
    while (current != null || stack.length > 0) {
        while (current != null) {
           stack.push(current);
           current = current.left;

        }
        current = stack.pop();
        let temp = current.right;
        
        if (current.right) {
            current.left = current.right = null;
            stack.push(current);
        } else {
            result.push(current.val)
        }   
        current = temp;
    }
    
    return result;
};