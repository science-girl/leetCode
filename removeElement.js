/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (!nums || nums.length === 0) return [];

  console.log(val);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums;
};

module.exports = removeElement;
