/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var preIdx, postIdx;

 /**
  * @param {number[]} pre
  * @param {number[]} post
  * @return {TreeNode}
  */
 var constructFromPrePost = function(pre, post) {
     
     preIdx = postIdx = 0;
     
     return createTree(pre, post);
 };
 
 function createTree(pre, post) {
     let node = new TreeNode(pre[preIdx]);
     
     preIdx += 1;
     
     if (node.val != post[postIdx]) {
         node.left = createTree(pre, post);
     }
     
     if (node.val != post[postIdx])
         node.right = createTree(pre, post);
     
     postIdx += 1
     
     return node;
 }