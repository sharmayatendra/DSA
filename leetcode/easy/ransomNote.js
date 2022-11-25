/* Problem - 383:
 Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

// T.C --> O(m+n) , S.C --> O(m+n)

const canConstruct = function (ransomNote, magazine) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < ransomNote.length; i++) {
    obj1[ransomNote[i]] = (obj1[ransomNote[i]] || 0) + 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    obj2[magazine[i]] = (obj2[magazine[i]] || 0) + 1;
  }
  for (key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    console.log(obj1[key]);
    console.log(obj2[key]);
    if (obj2[key] < obj1[key]) {
      return false;
    }
  }
  //   console.log(obj1);
  //   console.log(obj2);
  return true;
};

console.log(canConstruct("a", "b"));
