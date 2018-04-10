/**
 * a is an array that is longer than array b
 **/
const addBits = (a, b) => {
  let carry = 0;
  const bitSum = a.map((num, index) => {
    const sum = num ^ b[index] ^ carry;
    carry = num & b[index] || num & carry || b[index] & carry;

    return sum;
  });
  // if there is a remaining carry to push to the front:
  if (carry) bitSum.push(carry);
  return bitSum;
};

/**
 * Sum w/o using + or - operators
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (a === undefined || b === undefined || a < 0 || b < 0) return 0;
  if (a === 0 && b !== 0) return b;
  if (b === 0 && a !== 0) return a;

  // convert numbers to binary arrays
  const aBin = parseInt(a.toString(), 10)
    .toString(2)
    .split('')
    .reverse();
  const bBin = parseInt(b.toString(), 10)
    .toString(2)
    .split('')
    .reverse();

  // perform bit-wise operations on each element
  const sum =
    aBin.length >= bBin.length
      ? addBits(aBin, bBin).reverse()
      : addBits(bBin, aBin).reverse();

  return new Number(parseInt(sum.join(''), 2).toString(10));
};

module.exports = getSum;
