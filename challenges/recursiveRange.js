// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (num) => {
  let sum;
  // base case:
  if (num === 0) {
    return 0;
  }
  sum = num + recursiveRange(num - 1);
  return sum;
};

console.log(recursiveRange(10));
