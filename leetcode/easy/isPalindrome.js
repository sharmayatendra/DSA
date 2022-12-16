/** problem - 9
 * Given an integer x, return true if x is a palindrome
, and false otherwise.

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

const isPalindrome = (x) => {
  let num = x.toString();
  let numStr = "";
  for (let i = num.length - 1; i >= 0; i--) {
    numStr += num[i];
  }
  console.log(numStr);
  if (num === numStr) return true;
  else return false;
};

console.log(isPalindrome(121));
