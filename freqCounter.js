// WAF that returns true if every element in first array has the sqaured element in second array. frequency of element must be same

// BRUTE-FORCE APPROACH

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i] ** 2) {
        var index = j;
        break;
      }
      if (j === arr2.length - 1 && arr2[j] !== arr1[i] ** 2) {
        return false;
      }
    }
    arr2.splice(index, 1);
  }
  return true;
};

const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

// this is not the optimised approach since it has Time complexity of: O(n**2)

// console.log(same([1, 2, 3, 1], [4, 1, 9, 1]));
// console.log(same1([1, 2, 3, 1], [4, 1, 9, 1]));

// Frequency Counter approach

const freqCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    // console.log(":::", freqCounter1[val]);
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(freqCounter([1, 2, 3, 1, 5], [4, 1, 9, 1, 2]));

// valid Anagram problem: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let wordCountStr1 = {};
  let wordCountStr2 = {};
  for (let val of str1) {
    wordCountStr1[val] = (wordCountStr1[val] || 0) + 1;
    // console.log(":::", val);
  }
  for (let val of str2) {
    wordCountStr2[val] = (wordCountStr2[val] || 0) + 1;
  }

  for (let key in wordCountStr1) {
    if (wordCountStr2[key] !== wordCountStr1[key]) {
      return false;
    }
    if (!(key in wordCountStr2)) {
      return false;
    }
    // console.log(wordCountStr2[key]);
  }
  console.log(wordCountStr1);
  console.log(wordCountStr2);
  return true;
};

console.log(validAnagram("care", "race"));

// 2nd approach

const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq = {};

  for (let val of str1) {
    freq[val] ? (freq[val] += 1) : (freq[val] = 1);
  }

  for (let val of str2) {
    if (!freq[val]) {
      return false;
    } else {
      freq[val]--;
    }
  }
  return true;
};

console.log(validAnagram2("anagram", "nagaram"));
