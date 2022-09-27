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
