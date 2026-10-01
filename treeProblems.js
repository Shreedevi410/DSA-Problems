// Binary tree node.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary search tree with duplicate values ignored.
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return this;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      }

      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  delete(value) {
    const removeNode = (node, target) => {
      if (node === null) {
        return null;
      }

      if (target < node.value) {
        node.left = removeNode(node.left, target);
        return node;
      }

      if (target > node.value) {
        node.right = removeNode(node.right, target);
        return node;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }

      node.value = successor.value;
      node.right = removeNode(node.right, successor.value);
      return node;
    };

    this.root = removeNode(this.root, value);
    return this;
  }

  inorder() {
    return inorderTraversal(this.root);
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

const searchTree = new BinarySearchTree();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach((value) => searchTree.insert(value));
console.log("BST inorder:", searchTree.inorder());
console.log("BST contains 6:", searchTree.search(6));
searchTree.delete(3);
console.log("BST after deleting 3:", searchTree.inorder());