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
  const result = [];
  const stack = [];
  stack.push(root.left);
  stack.push(root.val);

  while (stack.length > 0) {
    const node = stack.shift();
    //console.log(node);
    if (node.val) result.push(node.val);
    //else result.push(node);

    if (node && node.right) stack.unshift(node.right);
    //if (node && node.val) stack.unshift(node.val);
    if (node && node.left) stack.unshift(node.left);

    console.log(stack);
  }

  console.log(result);
};

inorderTraversal({
  val: 1,
  right: { val: 3, right: null, left: null },
  left: {
    val: 4,
    right: null,
    left: { val: 2, right: null, left: null }
  }
});
