/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var max, sum;

var traverse = function(root, d) {
   if (root) {
       if (max === d) {
           sum += root.val;
       } else if (max < d) {
           sum = root.val;
           max = d;
       }
       traverse(root.left, d+1);
       traverse(root.right, d+1);
   } 
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    max = sum = 0; 
    
    traverse(root, 0);
    
    return sum;
};