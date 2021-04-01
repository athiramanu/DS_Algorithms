/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var moves;

 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var distributeCoins = function(root) {
     moves = 0;
     
     distribute(root)
     
     return moves; 
 };
 
 function distribute(root) {
 
     if (!root) return 0;
     
     let left = distribute(root.left);
     let right = distribute(root.right);
     
     moves += Math.abs(left) + Math.abs(right);
     
     return left + right + root.val - 1;
 }