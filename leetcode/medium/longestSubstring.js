/**
 * problem: 3
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;
  let left = 0;
  let right = 0;
  const map1 = new Map();
  console.log(map1);
  let maxLen = 0;

  while (right < s.length) {
    if (map1.has(s[right])) left = Math.max(map1.get(s[right]) + 1, left);

    map1.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("tmmzuxt"));
