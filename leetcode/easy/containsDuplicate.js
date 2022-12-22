/**problem: 217
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

const containsDuplicate = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
  }
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
