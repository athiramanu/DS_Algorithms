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
    
    let root = new TreeNode(preorder.shift());
    let stack = [root], top = 0;
    
    for (let num of preorder) {
        
        if (num < stack[top].val) {
            stack[top].left = new TreeNode(num);
            stack.push(stack[top].left);
            top++;
        } 
        else {
            let parent = null;

            while (top >= 0 && stack[top].val < num) {
                parent = stack.pop()
                top--;
            }    

            parent.right = new TreeNode(num);
            stack.push(parent.right);
            top++;
        }
        
    }
    
    return root;
};