/** problem - 58
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */

const lengthOfLastWord = (s) => {
  let len = 0;
  let isChar = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (isChar) {
      if (s[i] !== " ") len++;
      else break;
    } else {
      if (s[i] !== " ") {
        isChar = true;
        len++;
      }
    }
  }
  return len;
};

console.log(lengthOfLastWord("   hello world           "));
