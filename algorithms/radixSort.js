// works only on the list of numbers:

// T.C --> O(nk) , S.C --> O(n+k)  , n --> nums array items , k --> digitCount of the number

const getDigit = (num, place) => {
  return Math.floor(num / 10 ** place) % 10;
};

// console.log(getDigit(12345, 0));

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(43));

const mostDigits = (nums) => {
  let maxNumber = Math.max(...nums);
  console.log(maxNumber);
  return digitCount(maxNumber);
};

// console.log(mostDigits([20, 655, 87, 6000, 470, 8701548]));

const radixSort = (nums) => {
  let mostDigit = mostDigits(nums);
  console.log(mostDigit);
  for (let i = 0; i < mostDigit; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([20, 1, 439, 8888, 521, 738]));
