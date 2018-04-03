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
const preorderTraversal = function(root) {
  if (Object.keys(root).length === 0) return [];

  const stack = [];
  stack.push(root);
  const result = [];

  while (stack.length > 0) {
    const node = stack.shift();
    if (node) result.push(node.val);
    if (node && node.right) stack.unshift(node.right);
    if (node && node.left) stack.unshift(node.left);
  }
  return result;
};

module.exports = preorderTraversal;
