/**
 * a is an array that is longer than array b
 **/
const addBits = (a, b) => {
  let carry = 0;
  const bitSum = a.map((num, index) => {
    const sum = num ^ b[index] ^ carry;
    console.log(sum);
    if (
      (num === '1') & (b[index] === '1') ||
      (num === '1' && carry === '1') ||
      (b[index] && carry === '1')
    )
      carry = 1;
    console.log('carry', carry);
    return sum;
  });
  // if there is a remaining carry to push to the front:
  console.log(bitSum);
  if (carry) bitSum.push(carry);
  console.log(bitSum);
  return bitSum;
};

/**
 * Sum w/o using + or - operators
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (!a || !b) return 0;

  // convert numbers to binary arrays
  const aBin = parseInt(a.toString(), 10)
    .toString(2)
    .split('')
    .reverse();
  const bBin = parseInt(b.toString(), 10)
    .toString(2)
    .split('')
    .reverse();
  console.log(aBin);
  console.log(bBin);
  // perform bit-wise operations on each element
  const sum =
    aBin.length >= bBin.length
      ? addBits(aBin, bBin).reverse()
      : addBits(bBin, aBin).reverse();

  return new Number(parseInt(sum.join(''), 2).toString(10));
};

console.log(getSum(20, 30));

module.exports = getSum;
