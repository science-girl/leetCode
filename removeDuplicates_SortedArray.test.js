const removeDuplicates = require('./removeDuplicates_SortedArray');

test('array with no elements', () => {
  expect(removeDuplicates([])).toEqual(0);
});

test('pass no arguments', () => {
  expect(removeDuplicates()).toEqual(0);
});

test('array with one element', () => {
  expect(removeDuplicates([1])).toEqual(1);
});

test('array with no duplicates', () => {
  expect(removeDuplicates([1, 2, 3, 4])).toEqual(4);
});

test('array with all duplicates', () => {
  expect(removeDuplicates([1, 1, 1, 1])).toEqual(1);
});

test('array with multiple duplicates', () => {
  expect(removeDuplicates([1, 2, 2, 1])).toEqual(2);
});

test('array with one duplicate', () => {
  expect(removeDuplicates([1, 2, 2, 7])).toEqual(3);
});
