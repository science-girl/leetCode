const removeElement = require('./removeElement');

test('array with no elements', () => {
  expect(removeElement([], 3)).toEqual(0);
});

test('pass no arguments', () => {
  expect(removeElement()).toEqual(0);
});

test('pass with array and no val', () => {
  expect(removeElement([1, 2, 2, 1])).toEqual(4);
});

test('array with val as first index', () => {
  expect(removeElement([1, 2, 2, 1], 1)).toEqual(2);
});

test('array with val (0) not in the array', () => {
  expect(removeElement([1, 2, 2, 1], 0)).toEqual(4);
});

test('array with val not in the array', () => {
  expect(removeElement([1, 2, 2, 1], 3)).toEqual(4);
});

test('array with array of all val', () => {
  expect(removeElement([2, 2, 2, 2], 2)).toEqual(0);
});

test('array with val bookending array', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
});

test('array with val as last element', () => {
  expect(removeElement([3, 1, 4, 2], 2)).toEqual(3);
});
