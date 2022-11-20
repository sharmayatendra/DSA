// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// i/p -> [[[[[[1,[1,2,3]]]]]]] , o/p --> [1,1,2,3]
let newArr = [];
const flatten = (arr) => {
  //   console.log(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log("entering");
      flatten(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [10, 20, 30], 4]));

// approach-2:

const flattenArray = (arr) => {
  let newArr = [];

  const recursiveFn = (i, input) => {
    if (i >= input.length) return;
    if (Array.isArray(input[i])) {
      recursiveFn(0, input[i]);
    } else {
      newArr.push(input[i]);
    }
    recursiveFn(i + 1, input);
  };

  recursiveFn(0, arr);
  return newArr;
};

console.log(flattenArray([[[1], [2, [[10, [[20]], 30]]], 4]]));

// i --> 0 : inpLength - 4 , i--> 2 : inpLength: 4 , nextInp --> [10,20,30] , i --> 0
