const twoSum = require('./twoSum');

test('array with no elements', () => {
  expect(twoSum([])).toEqual([]);
});

test('array with no arguments', () => {
  expect(twoSum()).toEqual([]);
});

test('array values next to each other meeting target value', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('array values not sequential meeting target value', () => {
  expect(twoSum([2, 11, 15, 7], 9)).toEqual([0, 3]);
});

test('array value is two distinct values to get target', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('array values and target can be negative', () => {
  expect(twoSum([-3, -2, -4], -6)).toEqual([1, 2]);
});
