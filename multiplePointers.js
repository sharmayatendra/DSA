// we generally take two pointers here  & take a sorted array then we check for the condition if it matches or not.

// brute force method:

const isZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(isZero([-4, -3, -2, -1, 1, 2, 3, 5]));

// 2 pointers approach:

const isZero1 = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let zeroSum = arr[leftPointer] + arr[rightPointer];
    if (zeroSum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (zeroSum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
};

console.log(isZero1([-4, -3, -2, -1, 1, 2, 3, 5]));

// implement a function which accepts a sorted array & count the unique values in the array. there can be negative numbers in the array but it will always be sorted.

const countUniqueValues = (arr) => {
  let changeTracker = 0;
  let firstPointer = 0;
  let secondPointer = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (secondPointer !== arr.length - 1) {
    if (arr[secondPointer] !== arr[firstPointer]) {
      changeTracker++;
      console.log(changeTracker);
      firstPointer++;
      secondPointer++;
    } else {
      firstPointer++;
      secondPointer++;
    }
  }
  return changeTracker + 2;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

// 2nd approach:

const countUniqueValues2 = (arr) => {
  if (arr.length < 2) {
    return arr.length;
  }
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    arr[i] === arr[j] ? j++ : (arr[++i] = arr[j]);
  }
  return i + 1;
};

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// removeDuplicates:

const removeDuplicates = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let i = 0;
  let arr1 = [];
  let j = 1;
  while (j < arr.length) {
    arr[i] === arr[j] ? j++ : (arr[++i] = arr[j]);
  }
  for (let x = 0; x <= i; x++) {
    arr1.push(arr[x]);
  }
  return arr1;
};

console.log(removeDuplicates([5, 5, 7, 7, 7, 1, 2, 88, 88]));
