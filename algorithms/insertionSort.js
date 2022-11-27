// arr --> [5,2,1,19,7]

// T.C --> O(n^2)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      // currentValue = arr[j]

      arr[j] = currentValue;
      // console.log(arr);
    }
    // arr[j+1] = currentValue
  }
  return arr;
};

console.log(insertionSort([12, 11, 13, 5, 6]));
