/**problem: 258
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 */

// using recursion:
var addDigits = function (num) {
  let sum = 0;
  while (num > 0) {
    let unitPlace = num % 10;
    num = Math.floor(num / 10);
    sum += unitPlace;
  }
  if (sum >= 10) return addDigits(sum);
  else return sum;
};

// TC: O(1)
const addDigits1 = function (num) {
  if (num === 0) return num;
  if (num <= 9) return num;
  else return num % 9;
};
console.log(addDigits(38));
console.log(addDigits1(38));
