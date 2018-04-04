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
const inorderTraversal = root => {
  if (!root || Object.keys(root).length === 0) return [];

  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.shift();
    if (typeof node === 'number') {
      result.push(node);
    } else {
      if (node && node.right) stack.unshift(node.right);
      if (node && node.val) stack.unshift(node.val);

      if (node && node.left) stack.unshift(node.left);
    }
  }
  return result;
};

module.exports = inorderTraversal;
