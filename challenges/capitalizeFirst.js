// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// i/p --> ['car', 'bike' , 'race'] , o/p --> [Car , Bike , Race]

const capitalizeFirst = (arr) => {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }

  return newArr.concat(
    arr[0][0].toUpperCase() + arr[0].slice(1),
    newArr.concat(capitalizeFirst(arr.slice(1)))
  );
  //   return newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
};

console.log(capitalizeFirst(["car", "bike", "race", "heloow"]));

// approach-2:

function capitalizeFirst1(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) {
    return [];
  }
  const firstElement = array[0].charAt(0).toUpperCase() + array[0].slice(1);

  if (array.length === 1) {
    return [firstElement];
  }

  return [firstElement].concat(capitalizeFirst1(array.slice(1)));
}

console.log(capitalizeFirst1(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirst1([]));
