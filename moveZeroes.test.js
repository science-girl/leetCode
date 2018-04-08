const moveZeroes = require('./moveZeroes');

test('array with no elements', () => {
  expect(moveZeroes([])).toEqual([]);
});

test('array with no arguments', () => {
  expect(moveZeroes()).toEqual([]);
});
