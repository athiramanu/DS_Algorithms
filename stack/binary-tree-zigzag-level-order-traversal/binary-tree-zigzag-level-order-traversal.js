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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = {};
    var resultArray = [];
    var postOrder = function(root, i) {
        if (root) {
            postOrder(root.left, i+1);
            postOrder(root.right, i+1);
            if (result[i]) {
                (i%2 == 0) ? result[i].unshift(root.val) : result[i].push(root.val);
            } else {
                result[i] = [root.val];
            }
        }
    }
    
    postOrder(root, 1);
    
    for (var level in result) {
        resultArray.push(result[level]);
    }
    
    return resultArray;
};