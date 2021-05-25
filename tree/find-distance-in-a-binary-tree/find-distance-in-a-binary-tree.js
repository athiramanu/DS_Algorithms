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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
 var findDistance = function(root, p, q) {
    
    if (p == q) return 0;
 
    return getDistance(root,p,q)[0];

};

function getDistance(root, p, q) {
    
    if (!root) return [0, false];
    
    let [leftDistance, lfound] = getDistance(root.left, p, q);
    let [rightDistance, rfound] = getDistance(root.right, p, q);
    
    if (lfound || rfound) return [leftDistance || rightDistance, true];
    
    if (leftDistance && rightDistance) return [leftDistance + rightDistance, true];
    
    if (root.val == p || root.val == q) {
        if (!rightDistance && !leftDistance) return [1, false];
        else return [leftDistance || rightDistance, true];
    }
    
    if (rightDistance) rightDistance++;
    if(leftDistance) leftDistance++;    
    
    return [leftDistance || rightDistance, false];
}