// i/p --> [19,10,24,2,59,21] :: o/p --> sorted array of numbers

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // temp = 59
        arr[j] = arr[j + 1]; // arr[1] = 21
        arr[j + 1] = temp; // arr[2] = 59
      }
    }
  }
  return arr;
};

console.log(bubbleSort([19, 10, 24, 2, 59, 21]));

// ES6 version:

const bubbleSort1 = (arr) => {
  // function to swap:

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    // console.log(arr[0]);
    return arr;
  };

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSort1([19, 10, 24]));

// more optimized approach:

const bubbleSort2 = (arr) => {
  let noSwap;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // temp = 59
        arr[j] = arr[j + 1]; // arr[1] = 21
        arr[j + 1] = temp; // arr[2] = 59
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

console.log(bubbleSort2([8, 1, 2, 3, 4, 5, 6]));
