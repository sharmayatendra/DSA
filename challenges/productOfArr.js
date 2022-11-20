// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  console.log(arr);
  let res;
  // base case:
  if (arr.length === 0) {
    return 1;
  }
  res = arr[0] * productOfArray(arr.slice(1));
  return res;
};

// approach2:

const productOfArray2 = (arr) => {
  if (arr.length === 1) return arr[0];
  const lastEl = arr.pop();
  return lastEl * productOfArray2(arr);
};
console.log(productOfArray([10, 2, 3, 4, 5]));
