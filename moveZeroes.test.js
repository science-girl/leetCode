const moveZeroes = require('./moveZeroes');

test('array with no elements', () => {
  expect(moveZeroes([])).toEqual([]);
});

test('array with no arguments', () => {
  expect(moveZeroes()).toEqual([]);
});

test('array with no zeroes in the array', () => {
  expect(moveZeroes([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('array with zero at beginning of array', () => {
  expect(moveZeroes([0, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 0]);
});

test('array with all zeroes', () => {
  expect(moveZeroes([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
});

test('array with all > 1 zero', () => {
  expect(moveZeroes([0, 2, 3, 4, 0])).toEqual([2, 3, 4, 0, 0]);
});

test('array with zeroes already suffixed', () => {
  expect(moveZeroes([1, 2, 3, 4, 0, 0, 0])).toEqual([1, 2, 3, 4, 0, 0, 0]);
});

test('array with > 1 zeroes in middle', () => {
  expect(moveZeroes([1, 2, 0, 0, 0, 4, 5])).toEqual([1, 2, 4, 5, 0, 0, 0]);
});
