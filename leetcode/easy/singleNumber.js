/* problem - 136:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.*/

const singleNumber = (nums) => {
  let obj = {};
  for (let val of nums) {
    if (!obj[val]) obj[val] = true;
    else delete obj[val];
  }
  for (let key in obj) {
    return Number(key);
  }
};

console.log(singleNumber([4, 1, 2, 1, 2, 3, 3]));
