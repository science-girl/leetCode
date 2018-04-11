/**
 * a and b are arrays
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
 * pads num with padBit to create an 8 bit binary number
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
 * Sum w/o using + or - operators
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (a === undefined || b === undefined) return 0;
  if (a === 0 && b !== 0) return b;
  if (b === 0 && a !== 0) return a;

  // convert to two-complement binary num
  if (a < 0) {
    console.log(a);
    const aNeg = (-1 * a)
      .toString(2)
      .split('')
      .reverse();
    console.log(aNeg);
    padBits(aNeg, '1');

    const aBitFlipped = aNeg.map(digit => {
      return digit === '1' ? '0' : '1';
    });

    const plusOne = addBits(aBitFlipped, ['0', '1']);
    console.log(plusOne);
    const bBin = b
      .toString(2)
      .split('')
      .reverse();

    const sum = addBits(bBin, plusOne).reverse();
    console.log(sum);
    console.log(new Number(parseInt(sum.join(''), 2).toString(10)));
  }

  // convert numbers to binary arrays
  let aBin = padBits(a.toString(2).split(''), '0').reverse();
  let bBin = padBits(b.toString(2).split(''), '0').reverse();

  const sum = addBits(aBin, bBin).reverse();

  return new Number(parseInt(sum.join(''), 2).toString(10));
};

//console.log(getSum(6, 2));

module.exports = getSum;
