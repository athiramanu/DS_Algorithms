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
 var max;

 var diameterOfBinaryTree = function(root) { 
     max = 0;
     getDiameter(root);    
     return max;
 };
 
 function getDiameter(node) {
     
     if (node == null) {
         return 0;
     }
 
     const leftPath = getDiameter(node.left);
     const rightPath = getDiameter(node.right);
     const maxPath = Math.max(leftPath, rightPath) + 1;
 
     max = Math.max(max, leftPath + rightPath)
     
     return maxPath;
 }