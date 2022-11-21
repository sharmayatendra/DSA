const binarySearch = (arr, num) => {
  console.log("entering");
  let left = 0;
  let right = arr.length - 1;
  //   1 --> middle = 8/2 = 4 , 2 --> left = 5 , right = 8 , middle = 6
  let middle = Math.floor((left + right) / 2);
  while (right >= left) {
    // console.log("left", left, "right", right, "middle", middle);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
};

//   left        middle         right
console.log(binarySearch([2, 5, 6, 7, 8, 10, 26, 40, 50], 50));
