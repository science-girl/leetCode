const inorder = require('./inorder_iterative');

test('traverses a tree with multiple left nodes', () => {
  expect(
    inorder({
      val: 1,
      right: { val: 3, right: null, left: null },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([2, 4, 1, 3]);
});

test('traverses a tree with no nodes', () => {
  expect(inorder({})).toEqual([]);
});

test('traverses a tree with one node', () => {
  expect(
    inorder({
      val: 1,
      right: null,
      left: null
    })
  ).toEqual([1]);
});
