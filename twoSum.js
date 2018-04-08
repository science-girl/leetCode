/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  if (!nums || nums.length === 0) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
