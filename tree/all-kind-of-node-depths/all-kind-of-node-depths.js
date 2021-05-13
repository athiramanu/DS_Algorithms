function allKindsOfNodeDepths(root) {
      return getTreeInfo(root).sumOfAllDepths;
  }
  
  function getTreeInfo(tree) {
      if (tree == null) {
          return {
              numNodesInTree: 0,
              sumOfDepths: 0,
              sumOfAllDepths: 0
          }
      }
      
      const leftSubtreeInfo = getTreeInfo(tree.left);
      const rightSubtreeInfo = getTreeInfo(tree.right);
      
      const sumOfLeftDepths = leftSubtreeInfo.sumOfDepths + leftSubtreeInfo.numNodesInTree;
      const sumOfRightDepths = rightSubtreeInfo.sumOfDepths + rightSubtreeInfo.numNodesInTree;
      
      const numNodesInTree = leftSubtreeInfo.numNodesInTree + rightSubtreeInfo.numNodesInTree + 1;
      const sumOfDepths = sumOfLeftDepths + sumOfRightDepths;
      const sumOfAllDepths = sumOfDepths + leftSubtreeInfo.sumOfAllDepths + rightSubtreeInfo.sumOfAllDepths;
  
      return {
              numNodesInTree,
              sumOfDepths,
              sumOfAllDepths
          }
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }  