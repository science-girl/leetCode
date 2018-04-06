const removeElement = require('./removeElement');

test('array with no elements', () => {
  expect(removeElement([], 3)).toEqual([]);
});

test('pass no arguments', () => {
  expect(removeElement()).toEqual([]);
});

test('pass with array and no val', () => {
  expect(removeElement([1, 2, 2, 1])).toEqual([]);
});

test('array with val as first index', () => {
  expect(removeElement([1, 2, 2, 1], 1)).toEqual([2, 2]);
});

test('array with val (0) not in the array', () => {
  expect(removeElement([1, 2, 2, 1], 0)).toEqual([1, 2, 2, 1]);
});

test('array with val not in the array', () => {
  expect(removeElement([1, 2, 2, 1], 3)).toEqual([1, 2, 2, 1]);
});
