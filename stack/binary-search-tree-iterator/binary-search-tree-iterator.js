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
var BSTIterator = function(root) {
    var result = [];
    var inorderTraversal = function(root) {
        if (root) {
            inorderTraversal(root.left);
            result.push(root.val);
            inorderTraversal(root.right);
        }
    }
    inorderTraversal(root);
    this.bst = result;
    this.pointer = -1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pointer += 1;
    return this.bst[this.pointer];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.pointer + 1 < this.bst.length) {
        return true;
    }
    return false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */