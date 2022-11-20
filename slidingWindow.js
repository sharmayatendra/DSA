// maxSubarraySum

// [8,2,1,3,4,1,9,7]

const maxSubarraySum = (arr, num) => {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([8, 2, 1, 3, 4, 1, 9, 7], 3));
