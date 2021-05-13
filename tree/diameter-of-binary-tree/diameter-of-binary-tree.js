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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    const [path, diameter] = getDiameter(root);
    return diameter;
};

function getDiameter(node) {
    
    if (node == null) {
        return [-1, 0];
    }

    const [leftPath, leftDiameter] = getDiameter(node.left);
    const [rightPath, righttDiameter] = getDiameter(node.right);

    const maxPath = Math.max(leftPath, rightPath) + 1;
    const maxDiameter = Math.max(leftDiameter, righttDiameter, leftPath + rightPath + 2);
    
    return [maxPath, maxDiameter];
}