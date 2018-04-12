/**
 * a and b are arrays
 **/
const addBits = (a, b) => {
  let carry = '0';
  const bitSum = a.map((num, index) => {
    const sum = num ^ b[index] ^ carry;
    carry = num & b[index] || num & carry || b[index] & carry;
    return sum;
  });
  // if there is a remaining carry to push to the front:
  if (carry && bitSum.length < 8) bitSum.push(carry);
  return bitSum;
};

/**
 * returns array num padded with padBit to create an 8 bit binary number
 **/
const padBits = (num, padBit) => {
  let bitArray = new Array(8)
    .fill(padBit)
    .join('')
    .substring(num.length)
    .split('')
    .concat(num);

  return bitArray;
};

/**
 * returns a twos-complement negative representation of num
 * - inverts each bit and adds one
 **/
const getNegBinary = num => {
  let aNeg = (-1 * num).toString(2).split('');
  const sum = addOne(padBits(flipIt(aNeg), '1'));
  console.log(sum);
  return sum;
};

/**
 * returns an array representation of num with one added
 **/
const addOne = num => {
  const one = ['0', '0', '0', '0', '0', '0', '0', '1'].reverse();
  return addBits(num.reverse(), one);
};
/**
 * returns an array of inverted bits
 **/
const flipIt = num => {
  return num.map(digit => (digit === '1' ? '0' : '1'));
};

/**
 * returns twos complement decimal representation of array num
 **/
const bin2Dec = num => {
  const isNeg = num[0] === '1';
  const decimal = parseInt(
    addOne(flipIt(num))
      .reverse()
      .join(''),
    2
  );
  return isNeg ? -1 * decimal : decimal;
};

/**
 * Sum w/o using + or - operators
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (a === undefined || b === undefined) return 0;
  if (a === 0 && b !== 0) return b;
  if (b === 0 && a !== 0) return a;

  // convert numbers to binary arrays
  const aBin =
    a < 0 ? getNegBinary(a) : padBits(a.toString(2).split(''), '0').reverse();
  const bBin =
    b < 0 ? getNegBinary(b) : padBits(b.toString(2).split(''), '0').reverse();

  const sum = addBits(aBin, bBin).reverse();

  // convert back to twos-complement decimal
  if (sum[0] === '1') return bin2Dec(sum.join('').split(''));
  return new Number(parseInt(sum.join(''), 2).toString(10));
};

console.log(getSum(-6, -2));

module.exports = getSum;
