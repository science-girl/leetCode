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
  ).toEqual([[1]]);
});

test('traverses a tree with multiple left nodes', () => {
  expect(
    levelorder({
      val: 1,
      right: { val: 3, right: null, left: null },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([[1], [4, 3], [2]]);
});

test('traverses a tree with multiple left and right nodes', () => {
  expect(
    levelorder({
      val: 1,
      right: {
        val: 3,
        right: { val: 6, right: null, left: null },
        left: { val: 5, right: null, left: null }
      },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([[1], [4, 3], [2, 5, 6]]);
});

test('traverses a tree with multiple left and right nodes', () => {
  expect(
    levelorder({
      val: 3,
      right: {
        val: 20,
        right: { val: 7, right: null, left: null },
        left: { val: 15, right: null, left: null }
      },
      left: {
        val: 9,
        right: null,
        left: null
      }
    })
  ).toEqual([[3], [9, 20], [15, 7]]);
});
