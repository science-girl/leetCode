const getSum = require('./sumTwoInts');

test('passed with no arguments', () => {
  expect(getSum()).toEqual(0);
});

test('passed with one argument', () => {
  expect(getSum(0)).toEqual(0);
});

test('passed with two valid arguments', () => {
  expect(getSum(2, 1)).toEqual(3);
});

test('passed with two valid arguments requiring binary carry', () => {
  expect(getSum(2, 3)).toEqual(5);
});

test('integers of different binary lengths', () => {
  expect(getSum(100, 1)).toEqual(101);
});

test('integers of tens value', () => {
  expect(getSum(20, 30)).toEqual(50);
});

test('integers of zero value and one non-zero', () => {
  expect(getSum(0, 30)).toEqual(30);
});

test('passed with one negative number', () => {
  expect(getSum(2, -1)).toEqual(1);
});

test('passed with two negative numbers', () => {
  expect(getSum(-2, -1)).toEqual(-3);
});
