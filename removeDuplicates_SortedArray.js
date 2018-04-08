/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  if (!nums || nums.length === 0) return 0;

  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      //nums[curr + 1] = nums[i + 1];
      curr++;
    }
  }
  return curr + 1;
};

module.exports = removeDuplicates;
