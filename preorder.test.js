const preorder = require('./preorder_iterative');

test('traverses a tree with multiple left nodes', () => {
  expect(
    preorder({
      val: 1,
      right: { val: 3, right: null, left: null },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([1, 4, 2, 3]);
});

test('traverses a tree with no nodes', () => {
  expect(preorder({})).toEqual([]);
});

test('traverses a tree with only left nodes', () => {
  expect(
    preorder({
      val: 1,
      right: null,
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([1, 4, 2]);
});
