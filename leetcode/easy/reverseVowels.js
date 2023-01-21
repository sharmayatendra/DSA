/**
 * problem: 345 - reverse vowels of string
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 */

const reverseVowels = (s) => {
  let res = [];
  let resStr = "";

  for (let i = 0; i < s.length; i++) {
    res.push(s[i]);
  }
  let i = 0;
  let j = res.length - 1;
  while (j > i) {
    if (
      (res[i] === "a" ||
        res[i] === "e" ||
        res[i] === "i" ||
        res[i] === "o" ||
        res[i] === "u" ||
        res[i] === "A" ||
        res[i] === "E" ||
        res[i] === "I" ||
        res[i] === "O" ||
        res[i] === "U") &&
      (res[j] === "a" ||
        res[j] === "e" ||
        res[j] === "i" ||
        res[j] === "o" ||
        res[j] === "u" ||
        res[j] === "A" ||
        res[j] === "E" ||
        res[j] === "I" ||
        res[j] === "O" ||
        res[j] === "U")
    ) {
      let temp = res[i];
      res[i] = res[j];
      res[j] = temp;
      i++;
      j--;
    } else if (
      (res[i] !== "a" ||
        res[i] !== "e" ||
        res[i] !== "i" ||
        res[i] !== "o" ||
        res[i] !== "u" ||
        res[i] !== "A" ||
        res[i] !== "E" ||
        res[i] !== "I" ||
        res[i] !== "O" ||
        res[i] !== "U") &&
      (res[j] === "a" ||
        res[j] === "e" ||
        res[j] === "i" ||
        res[j] === "o" ||
        res[j] === "u" ||
        res[j] === "A" ||
        res[j] === "E" ||
        res[j] === "I" ||
        res[j] === "O" ||
        res[j] === "U")
    ) {
      i++;
    } else if (
      (res[i] === "a" ||
        res[i] === "e" ||
        res[i] === "i" ||
        res[i] === "o" ||
        res[i] === "u" ||
        res[i] === "A" ||
        res[i] === "E" ||
        res[i] === "I" ||
        res[i] === "O" ||
        res[i] === "U") &&
      (res[j] !== "a" ||
        res[j] !== "e" ||
        res[j] !== "i" ||
        res[j] !== "o" ||
        res[j] !== "u" ||
        res[j] !== "A" ||
        res[j] !== "E" ||
        res[j] !== "I" ||
        res[j] !== "O" ||
        res[j] !== "U")
    ) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  for (let i = 0; i < res.length; i++) {
    resStr += res[i];
  }
  return resStr;
};

console.log(reverseVowels("hello"));
