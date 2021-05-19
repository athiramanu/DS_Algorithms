/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0]);

    for (let i = 1; i < preorder.length; i++) {
        insert(root, preorder[i]);
    }
    
    return root;
};

function insert(root, num, parent) {
    if (!root) {
        if (parent.val > num) parent.left = new TreeNode(num);
        else parent.right = new TreeNode(num);
        return;
    } 
    else if (root.val > num) {
        insert(root.left, num, root);
    }
    else {
        insert(root.right, num, root)
    }
}