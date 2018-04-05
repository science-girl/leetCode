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

test('traverses a tree with multiple left nodes', () => {
  expect(
    postorder({
      val: 1,
      right: { val: 3, right: null, left: null },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([2, 4, 3, 1]);
});

test('traverses a tree with no left nodes', () => {
  expect(
    postorder({
      val: 1,
      right: { val: 3, right: null, left: null },
      left: null
    })
  ).toEqual([3, 1]);
});

test('traverses a tree with no right nodes', () => {
  expect(
    postorder({
      val: 1,
      right: null,
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([2, 4, 1]);
});

test('traverses a tree with multiple left and right nodes', () => {
  expect(
    postorder({
      val: 1,
      right: {
        val: 3,
        right: null,
        left: { val: 5, left: null, right: null }
      },
      left: {
        val: 4,
        right: null,
        left: { val: 2, right: null, left: null }
      }
    })
  ).toEqual([2, 4, 5, 3, 1]);
});
