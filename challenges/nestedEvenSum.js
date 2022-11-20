// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = (obj) => {
  let totalSum = 0;
  for (key in obj) {
    if (typeof obj[key] === "object") {
      totalSum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      totalSum += obj[key];
    }
  }
  return totalSum;
};

console.log(
  nestedEvenSum({
    a: 1,
    b: 2,
    c: 3,
    d: {
      e: 6,
      f: {
        i: true,
      },
    },
    g: 20,
  })
);
