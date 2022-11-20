// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

const sameFrequency = (num1, num2) => {
  let obj1 = {};
  let obj2 = {};

  while (num1 > 0) {
    const lastDigit = num1 % 10;
    obj1[lastDigit] = (obj1[lastDigit] || 0) + 1;
    num1 = Math.floor(num1 / 10);
  }
  console.log(obj1);
  while (num2 > 0) {
    const lastDigit = num2 % 10;
    obj2[lastDigit] = (obj2[lastDigit] || 0) + 1;
    num2 = Math.floor(num2 / 10);
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  console.log(obj2);
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 2)); // false

// approach2:

const sameFrequencyUsingMap = (num1, num2) => {
  const map = new Map();
  while (num1 > 0) {
    let unitPlaceDigit = num1 % 10;
    map.set(unitPlaceDigit, (map.get(unitPlaceDigit) || 0) + 1);
    num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
    let unitPlaceDigit = num2 % 10;
    if (!map.get(unitPlaceDigit)) {
      return false;
    }
    map.set(unitPlaceDigit, map.get(unitPlaceDigit) - 1);
    num2 = Math.floor(num2 / 10);
  }

  return true;
};

console.log(sameFrequencyUsingMap(821, 12));

function sameFrequency3(n, m) {
  const map = new Map();

  while (n > 0) {
    const digitN = n % 10;
    console.log(map.set(digitN, (map.get(digitN) || 0) + 1));
    n = Math.floor(n / 10);
  }

  while (m > 0) {
    const digitM = m % 10;
    if (!map.get(digitM)) {
      return false;
    }
    console.log(map.set(digitM, map.get(digitM) - 1));
    m = Math.floor(m / 10);
  }

  return true;
}

console.log(sameFrequency3(22, 2));
