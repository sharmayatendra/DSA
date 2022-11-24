// i/p --> [21,31,4,53,32]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; // (2,4)
      }

      // swap only if index(i) not equals to the min value otherwise unnecessary swapping takes place
      if (i !== min) {
        console.log(i, min);
        let temp = arr[i]; // temp = arr[0]  = 21
        arr[i] = arr[min]; // arr[0] = 4
        arr[min] = temp; // arr[0] =
      }
    }
  }
  return arr;
};

console.log(selectionSort([0, 2, 10, 17, 19, 22, 34]));

const selectionSort2 = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; // (2,4)
      }

      // swap only if index(i) not equals to the min value otherwise unnecessary swapping takes place
      if (i !== min) {
        console.log(i, min);
        swap(arr, i, min);
      }
    }
  }
  return arr;
};

console.log(selectionSort2([0, 2, 10, 17, 19, 22, 34]));
