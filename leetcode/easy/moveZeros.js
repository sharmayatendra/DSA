/**
 * problem:283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */

const moveZeroes = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } else if (
      (nums[i] !== 0 && nums[j] === 0) ||
      (nums[i] !== 0 && nums[j] !== 0)
    ) {
      i++;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 2, 0, 7, 0, 8, 10]));
