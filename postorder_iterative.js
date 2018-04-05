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
const postorderTraversal = root => {
  if (!root || Object.keys(root).length === 0) return [];

  const result = [];
  const stack = [];
  stack.push(root);
};

module.exports = postorderTraversal;
