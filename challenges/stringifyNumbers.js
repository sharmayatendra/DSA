// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// i/p --> {a: 1 , b: 2 ,  c: {d: 3 , e: { f: 4}} , g: 5} , o/p --> {a: "1" , b: "2" .... }

const stringifyNumbers = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
};

console.log(stringifyNumbers({ a: 1, b: 2, c: { d: 3, e: [1, 3, 5] } }));
// console.log(stringifyNumbers(obj))

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// function stringifyNumbers2(obj) {
//   const arr = Object.keys(obj);
//   const newObj = {};

//   for (const key of arr) {
//     if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// console.log(stringifyNumbers2(obj));
