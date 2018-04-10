const reverse = require('./reverseString');

test('passed with no arguments', () => {
  expect(reverse()).toEqual('');
});

test('passed with empty string', () => {
  expect(reverse('')).toEqual('');
});

test('single character string', () => {
  expect(reverse('a')).toEqual('a');
});

test('multiple character string', () => {
  expect(reverse('hello')).toEqual('olleh');
});

test('multiple character string with spaces', () => {
  expect(reverse('hello world')).toEqual('dlrow olleh');
});

test('multiple character string with numbers', () => {
  expect(reverse('hell0 world')).toEqual('dlrow 0lleh');
});

test('multiple character string with spaces and special chars', () => {
  expect(reverse('hello world!')).toEqual('!dlrow olleh');
});
