/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var count;

 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var pseudoPalindromicPaths  = function(root) {
     
     count = 0;
         
     dfs(root, new Map());
     
     return count;
 };
 
 function dfs(root, map) {
     if (!root) return;
         
     if (map.has(root.val)) map.delete(root.val);
     else map.set(root.val, 1);
   
     if (!root.left && !root.right && map.size <= 1) count++;   
     
     dfs(root.left, map);
     dfs(root.right, map)
     
     if (map.get(root.val) > 1) map.set(root.val, map.get(root.val) - 1);
     else if (map.get(root.val) == 1) map.delete(root.val);
     else map.set(root.val, 1);    
 } 