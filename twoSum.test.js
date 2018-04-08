const twoSum = require('./twoSum');

test('array with no elements', () => {
  expect(twoSum([])).toEqual([]);
});

test('array with no arguments', () => {
  expect(twoSum()).toEqual([]);
});
