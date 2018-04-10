/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => {
  if (!s || s.length === 0) return '';
  return s
    .split('')
    .reverse()
    .join('');
};

module.exports = reverseString;
