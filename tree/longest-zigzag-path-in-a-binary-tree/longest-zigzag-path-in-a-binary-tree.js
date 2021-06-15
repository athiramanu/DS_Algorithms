/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var height;

 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var longestZigZag = function(root) {
     
     height = 0;
     
     findLongestPath(root);
     
     return height;
 };
 
 function findLongestPath(root) {
 
     let lh = 0, rh = 0;
         
     if (root.left) {
         let [llh, lrh] = findLongestPath(root.left);
         lh = lrh + 1;
         if (lh > height) height = lh;
     }
     
     if (root.right) {
         let [rlh, rrh] = findLongestPath(root.right);
         rh = rlh + 1;
         if (rh > height) height = rh;
     }
         
     return [lh, rh];
 }