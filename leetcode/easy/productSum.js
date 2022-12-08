/*problem - 1281
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

*/

var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    let unit = n % 10;
    n = Math.floor(n / 10);
    product *= unit;
    sum += unit;
  }
  return product - sum;
};
