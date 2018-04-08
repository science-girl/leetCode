/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  if (!nums || nums.length === 0) return [];
  // simply return arrays w/o zeros
  if (!nums.includes(0)) return nums;
  // simply return array w/ all zeroes
  if (nums.every(num => num === 0)) return nums;

  // find first occurance of zero and iterate from there
  // to the last index of zero.
  const firstZero = nums.indexOf(0);
  const lastZero = nums.lastIndexOf(0);

  // simply return array that already has zeroes at end
  if (
    nums.slice(firstZero, lastZero).every(num => num === 0) &&
    lastZero === nums.length
  )
    return nums;

  let pointer = 0;
  // bubble the zeroes to the end by swapping all the non-zeroes
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let k = nums[i];
      nums[i] = nums[pointer];
      nums[pointer] = k;
      pointer++;
    }
  }
  return nums;
};

module.exports = moveZeroes;
