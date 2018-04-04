/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (Object.keys(root).length < 1) return [];

  const stack = traverseLeft(root);
  stack.push(root.val);
  return stack.concat(traverseRight(root));
};

const traverseLeft = root => {
  const stack = [];
  while (root.left) {
    stack.unshift(root.left.val);
    root = root.left;
  }
  return stack;
};

const traverseRight = root => {
  const stack = [];
  while (root.right) {
    stack.unshift(root.right.val);
    root = root.right;
  }
  return stack;
};

module.exports = inorderTraversal;
