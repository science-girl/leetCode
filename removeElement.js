/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (!nums || nums.length === 0) return 0;

  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const indexOfVal = nums.indexOf(val);
    if (indexOfVal > -1) nums.splice(indexOfVal, 1);
  }
  return nums.length;
};

module.exports = removeElement;
