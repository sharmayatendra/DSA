// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

//  i/p --> {a: "a" , b: "b" , c: 'c' , d: 4 , e: {f: 5 , g: 'g'} , o/p --> ['a' , 'b' , 'c' , 'g']

const collectStrings = (obj) => {
  let newArr = [];
  for (key in obj) {
    if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    } else {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
  }
  return newArr;
};

console.log(
  collectStrings({ a: "a", b: "b", c: "c", d: 4, e: { f: 5, g: "g" } })
);

//approach-2:

// const obj = {
//   stuff: "foo",
//   num1: 4,
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };
// function collectStrings2(obj) {
//   const arr = Object.keys(obj);

//   let result = [];

//   for (const key of arr) {
//     if (typeof obj[key] === "object") {
//       result = result.concat(collectStrings2(obj[key]));
//     } else if (typeof obj[key] === "string") {
//       result.push(obj[key]);
//     }
//   }

//   return result;
// }
// console.log(collectStrings2(obj));
