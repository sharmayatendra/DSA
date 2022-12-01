/*Problem - 69:
x >= 0
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator. */

var mySqrt = function (x) {
  let count = 0;
  let i = 1;
  while (x >= 0) {
    x = x - i;
    i += 2;
    count++;
  }
  return count - 1;
};
