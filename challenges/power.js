// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (base, exp) => {
  let result;

  //base  case:
  if (exp === 0) {
    return 1;
  }
  // 2 * power(2,2)
  // 2 * 2 * power(2,1)
  // 2 * 2 * 2
  result = base * power(base, exp - 1);

  return result;
};

console.log(power(2, 3));
