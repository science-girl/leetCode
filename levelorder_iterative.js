/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelorderTraversal = root => {
  if (!root || Object.keys(root).length === 0) return [];

  const stack = [];
  let result = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.shift();
    if (typeof node === 'number') result.push(node);

    if (node && node.val) stack.push(node.val);
    if (node && node.left) stack.push(node.left);
    if (node && node.right) stack.push(node.right);
    //console.log(stack);
  }
  //console.log(result);
  return result;
};

module.exports = levelorderTraversal;
