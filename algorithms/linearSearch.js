const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

// time complexity --> O(n) , means as n grows we need to perform more & more operations to check if element is there or not
console.log(linearSearch([1, 2, 3, 4, 5, 67, 90], 40));
