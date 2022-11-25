// arr --> [5,2,1,19,7]

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      // currentValue = arr[j]

      arr[j] = currentValue;
      console.log(arr);
    }
  }
  return arr;
};

console.log(insertionSort([5, 20, 4, 0]));
