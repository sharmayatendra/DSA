/**problem: 219
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * Input: nums = [1,2,3,1], k = 3
Output: true
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */

const containsNearByDuplicate = (nums, k) => {
  let i = 0;
  let j = nums.length - 1;
  //   console.log("entering");
  while (i !== j) {
    if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
    if (j === i + 1 && nums[i] !== nums[j]) {
      i++;
    }
    j--;
  }
  return false;
};

console.log(containsNearByDuplicate([1, 2, 3, 1], 2));
