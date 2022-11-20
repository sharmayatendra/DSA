// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

const areThereDuplicates = (...args) => {
  const rest = args;
  console.log(rest.sort((a, b) => a - b));
  let i = 0;
  let j = 1;
  while (j < rest.length) {
    if (rest[i] === rest[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
};

console.log(areThereDuplicates(1, 4, 4, 9, 2, 3));
