// pivot helper:

// arr: [5,8,3,10,2] --> [5,3,8,10,2] --> [5,3,2,10,8] --> [2,3,5,10,8]
// arr: [10,3,12,40,5,6]

// T.C: average , best case O(nlogn) , worstCase: O(n^2) , S.C: O(logn)

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start;
  let pivot = arr[start];

  const swap = (array, idx1, idx2) => {
    return ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
  };
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  console.log(arr);
  swap(arr, pivotIndex, start);
  return pivotIndex;
};

// console.log(pivotHelper([5, 8, 3, 10, 2]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    console.log(pivotIndex);
    // for left portion of pivot point:
    quickSort(arr, left, pivotIndex - 1);
    // for right portion of the pivot point:
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([5, 8, 3, 10, 2]));
