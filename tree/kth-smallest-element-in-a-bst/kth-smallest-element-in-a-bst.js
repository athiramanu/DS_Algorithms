/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var result;

 /**
  * @param {TreeNode} root
  * @param {number} k
  * @return {number}
  */
 var kthSmallest = function(root, k) {
     
     result = null;
   
     getNode(root, k)
     
     return result;  
 };
 
 function getNode(node, k) {
                 
     if (!node) return k;
     
     k = getNode(node.left, k);
     
     if (--k == 0) result = node.val;
         
     else return getNode(node.right, k)
 }