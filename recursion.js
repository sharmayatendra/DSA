// Helper method recursion:

// to collect all the odd values in a given array

const collectOddValues = (arr) => {
  const result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([99, 10, 12, 30, 31, 55, 57]));

// Pure recursion same problem as above:

const collectOddNums = (arr) => {
  let res = [];

  if (arr.length === 0) {
    return res;
  }

  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }
  console.log(res);
  res = res.concat(collectOddNums(arr.slice(1)));
  return res;
};

console.log(collectOddNums([99, 10, 12, 30, 31, 55, 57]));
