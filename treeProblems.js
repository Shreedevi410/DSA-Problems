// Binary tree node.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Visit the root, then the left and right subtrees.
function preorderTraversal(root, values = []) {
  if (root === null) {
    return values;
  }

  values.push(root.value);
  preorderTraversal(root.left, values);
  preorderTraversal(root.right, values);
  return values;
}

// Visit the left subtree, then the root, then the right subtree.
function inorderTraversal(root, values = []) {
  if (root === null) {
    return values;
  }

  inorderTraversal(root.left, values);
  values.push(root.value);
  inorderTraversal(root.right, values);
  return values;
}

// Visit the left and right subtrees, then the root.
function postorderTraversal(root, values = []) {
  if (root === null) {
    return values;
  }

  postorderTraversal(root.left, values);
  postorderTraversal(root.right, values);
  values.push(root.value);
  return values;
}

// Visit each tree level from left to right.
function levelOrderTraversal(root) {
  if (root === null) {
    return [];
  }

  const values = [];
  const queue = [root];
  let head = 0;

  while (head < queue.length) {
    const node = queue[head];
    head++;
    values.push(node.value);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
}

// Return the number of nodes on the longest root-to-leaf path.
function treeHeight(root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

// Search a binary tree and return true when the value is present.
function containsValue(root, target) {
  if (root === null) {
    return false;
  }

  if (root.value === target) {
    return true;
  }

  return containsValue(root.left, target) || containsValue(root.right, target);
}

// Example tree:
//         1
//       /   \
//      2     3
//     / \   /
//    4   5 6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log("Preorder:", preorderTraversal(root));
console.log("Inorder:", inorderTraversal(root));
console.log("Postorder:", postorderTraversal(root));
console.log("Level order:", levelOrderTraversal(root));
console.log("Tree height:", treeHeight(root));
console.log("Contains 5:", containsValue(root, 5));
console.log("Contains 9:", containsValue(root, 9));