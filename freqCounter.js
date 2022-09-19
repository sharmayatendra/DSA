// WAF that returns true if every element in first array has the sqaured element in second array. frequency of element must be same

// BRUTE-FORCE APPROACH

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i] ** 2) {
        var index = j;
        break;
      }
      if (j === arr2.length - 1 && arr2[j] !== arr1[i] ** 2) {
        return false;
      }
    }
    arr2.splice(index, 1);
  }
  return true;
};

const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

// this is not the optimised approach since it has Time complexity of: O(n**2)

console.log(same([1, 2, 3, 1], [4, 1, 9, 1]));
console.log(same1([1, 2, 3, 1], [4, 1, 9, 1]));
