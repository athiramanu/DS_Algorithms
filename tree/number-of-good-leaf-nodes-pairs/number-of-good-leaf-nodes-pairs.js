/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var pairs;

 /**
  * @param {TreeNode} root
  * @param {number} distance
  * @return {number}
  */
 var countPairs = function(root, distance) {
     pairs = 0
     getNode(root, distance);
     return pairs
 };
 
 function getNode(root, distance) {
     if (!root || !root.left && !root.right) {
         let count = new Array(distance+1);
         count.fill(0);
         if (root) count[1]++;
         return count;
     }
     
     let left = getNode(root.left, distance);
     let right = getNode(root.right, distance);
         
     let prevSum = 0;
     for (let i = 1; i <= distance; i++) {
         prevSum += left[i];
         pairs += prevSum * right[distance-i]
     }
     
     let count = [0];
     for (let i = distance; i >= 1; i--)
         count[i] = left[i-1] + right[i-1]; 
         
     return count;
 }