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
    let row = [];
    const temp = [...stack];

    temp.forEach(node => {
      row.push(node.val);
      if (node && node.left) stack.push(node.left);
      if (node && node.right) stack.push(node.right);

      stack.shift();
    });

    result.push(row);
  }
  return result;
};

// levelorderTraversal({
//   val: 1,
//   right: {
//     val: 3,
//     right: { val: 6, right: null, left: null },
//     left: { val: 5, right: null, left: null }
//   },
//   left: {
//     val: 4,
//     right: null,
//     left: { val: 2, right: null, left: null }
//   }
// });

module.exports = levelorderTraversal;
