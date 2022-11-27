// MergeSort: works on the logic of merging & sorting the array.

// T.C --> O(nlogn) , O(logn) --> for decomposition & O(n) --> for comparison per decomposition

//merging:

const mergingArr = (arr1, arr2) => {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    }
  }
  console.log(i, j);
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
};

// mergingArr([1, 2, 3, 5], [1, 8, 10, 13]);

const mergeSort = (arr) => {
  console.log(arr.length);
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midPoint));
  let rightArr = mergeSort(arr.slice(midPoint));
  return mergingArr(leftArr, rightArr);
};
console.log(mergeSort([1, 3, 100, 40]));
