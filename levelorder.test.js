const levelorder = require('./levelorder_iterative');

test('traverses a tree with no nodes', () => {
  expect(levelorder({})).toEqual([]);
});

test('traverses a tree with no argument', () => {
  expect(levelorder()).toEqual([]);
});

test('traverses a tree with one node', () => {
  expect(
    levelorder({
      val: 1,
      right: null,
      left: null
    })
  ).toEqual([1]);
});
