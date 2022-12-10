/** problem -389
 * You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.
 * 
 */

var findTheDifference = function (s, t) {
  let obj1 = {};
  let obj2 = {};

  for (let val of s) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of t) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj2) {
    if (!(key in obj1)) {
      return key;
    }
    if (obj2[key] === obj1[key] + 1) {
      return key;
    }
  }
};

findTheDifference("aabb", "aabb");