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
 var CBTInserter = function(root) {
    
    this.root = root
    this.queue = [root];
    
    while (this.queue.length) {
        let node = this.queue[0];
                
        if (node.left) this.queue.push(node.left);
        if (node.right) this.queue.push(node.right);
        
        if (node.left && node.right) this.queue.shift();
        else break;
    }
    
    return this;
    
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
   
    let node = new TreeNode(v);
    let parent = this.queue[0];
    
    this.queue.push(node);
    
    if (!parent.left) parent.left = node;
    else {
        parent.right = node;
        this.queue.shift();
    }
        
    return parent.val;    
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */