/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  if (!nums) return 0;

  return new Set(nums).size;
};

module.exports = removeDuplicates;
