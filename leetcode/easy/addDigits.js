/**problem: 258
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 */

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
