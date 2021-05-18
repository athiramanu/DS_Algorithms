/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

 var Node = function () {
    if (this.constructor === Node) {
      throw new Error('Cannot instanciate abstract class');
    }
  };
  
  Node.prototype.evaluate = function () {
    throw new Error('Cannot call abstract method')
  };
  
  class TreeNode extends Node {
      constructor(val, left, right) {
          super();
          this.val = val ?? null;
          this.left = left ?? null;
          this.right = right ?? null; 
      }    
      
      evaluate() {
          if (!isNaN(this.val)) return this.val;
          
          let left = this.left.evaluate();
          let right = this.right.evaluate();
          
          return eval(`${left}${this.val}${right}`);
      }
  }
  
  /**
   * This is the TreeBuilder class.
   * You can treat it as the driver code that takes the postinfix input 
   * and returns the expression tree represnting it as a Node.
   */
  
  class TreeBuilder{
      /**
       * @param {string[]} s
       * @return {Node}
       */
      buildTree(postfix) {
          let stack = [];
          
          for (let val of postfix) {            
              if (isNaN(val)) {
                  let num2 = stack.pop();
                  let num1 = stack.pop();
                  stack.push(new TreeNode(val, num1, num2));
              } else {
                  stack.push(new TreeNode(val))
              }
          }
          
          return stack.pop()
      }
  }
  
  /**
   * Your TreeBuilder object will be instantiated and called as such:
   * var obj = new TreeBuilder();
   * var expTree = obj.buildTree(postfix);
   * var ans = expTree.evaluate();
   */