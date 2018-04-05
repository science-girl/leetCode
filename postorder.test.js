const postorder = require('./postorder_iterative');

test('traverses a tree with no nodes', () => {
  expect(postorder({})).toEqual([]);
});

test('traverses a tree with no argument', () => {
  expect(postorder()).toEqual([]);
});

test('traverses a tree with one node', () => {
  expect(
    postorder({
      val: 1,
      right: null,
      left: null
    })
  ).toEqual([1]);
});
