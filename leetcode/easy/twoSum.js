/** Problem - 1:
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

// const twoSum = (nums, target) => {
//   let obj = {};
//   // let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     obj[i] = nums[i];
//   }

//   for (let key in obj) {
//     let rem = target - obj[key];
//     // console.log(rem)
//   }
//   return obj;
// };

let obj = {};
for (let i = 0; i < nums.length; i++) {
  obj[nums[i]] = i;
}
for (let i = 0; i < nums.length; i++) {
  let remaining = target - nums[i];
  let foundedKey = obj[remaining];
  if (foundedKey !== undefined && foundedKey !== i) return [i, foundedKey];
}
return [0, 0];

console.log(twoSum([3, 2, 4], 6));
