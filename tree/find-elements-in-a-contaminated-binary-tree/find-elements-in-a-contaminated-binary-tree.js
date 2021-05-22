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
 */
 var FindElements = function(root) {
    this.root = root;
    this.correctTree(this.root);
};

FindElements.prototype.correctTree = function(root) {
    if (root.val == -1) 
        root.val = 0;
    if (root.left) {
        root.left.val = 2*root.val + 1;
        this.correctTree(root.left);
    }
    if (root.right) {
        root.right.val = 2*root.val + 2;
        this.correctTree(root.right);
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target, root = this.root) {
    
    if (!root) return false

    return root.val == target || this.find(target, root.left) || this.find(target, root.right);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */