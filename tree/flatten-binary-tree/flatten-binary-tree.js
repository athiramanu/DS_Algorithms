class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function flattenBinaryTree(root) {
    let [leftMost, _] = flattenTree(root);
    return leftMost;
}

function flattenTree(node) {
    let leftMost, rightMost;

    if (node.left == null) {
        leftMost = node;
    }
    else {
        let [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left);
        connectNodes(leftSubtreeRightMost, node);
        leftMost = leftSubtreeLeftMost;
    }

    if (node.right == null) {
        rightMost = node;
    }
    else {
        let [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(node.right);
        connectNodes(node, rightSubtreeLeftMost);
        rightMost = rightSubtreeRightMost;
    }

    return [leftMost, rightMost];
}

function connectNodes(left, right) {
    left.right = right;
    right.left = left;
}
