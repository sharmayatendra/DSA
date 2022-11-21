// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = (arr) => {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }
  newArr = newArr.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
  return newArr;
};

console.log(capitalizeWords(["bike", "car", "race"]));
