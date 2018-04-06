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
