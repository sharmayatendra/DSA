// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  let newStr;

  const reverse = (str1) => {
    if (str1.length === 0) {
      return "";
    }
    return (newStr = str1.slice(-1) + reverse(str1.slice(0, str1.length - 1)));
  };
  reverse(str);

  if (newStr === str) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("rotator"));

// approach-2:

const isPalindrome1 = (str) => {
  if (str.length === 1 || str.length === 0) {
    return true;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar === lastChar) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
};

console.log(isPalindrome1("rotator"));
