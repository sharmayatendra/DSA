/* Problem-209
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

const minSubArrLen = (target, nums) => {
  let sum = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  while (start < nums.length) {
    // end -> 3 , checking for the left window && increasing the right side of window
    if (sum < target && end < nums.length) {
      sum += nums[end];
      end++;
    }
    // checking for right side && increasing the left side of window
    else if (sum >= target) {
      minLength = Math.min(minLength, end - start);
      console.log(minLength);
      sum -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrLen(7, [2, 2, 4, 3]));
