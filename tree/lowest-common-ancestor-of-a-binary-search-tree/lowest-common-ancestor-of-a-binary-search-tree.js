/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 let result;

 /**
  * @param {TreeNode} root
  * @param {TreeNode} p
  * @param {TreeNode} q
  * @return {TreeNode}
  */
 var lowestCommonAncestor = function(root, p, q) {
     
     if (!root) return null;
             
     let dir1 = (root.val < p.val) ? "right" :"left";
     let dir2 = (root.val < q.val) ? "right" :"left";
         
     if (dir1 != dir2 || root.val == p.val || root.val == q.val)
         return root;
     
     return dir1 == "left" ? lowestCommonAncestor(root.left, p, q) : lowestCommonAncestor(root.right, p, q);
 };