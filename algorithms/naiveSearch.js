// problem is to find shorter string in longer string & count the numbers.

// i/p --> str1 --> wwomgkjomg , str2 --> omg  , o/p -->

const naiveSearch = (str1, str2) => {
  let count = 0;

  //   0 , 0 -> X , 1,0 -> x , 2 , 0 -> count = 1 , 2 ,1 ->
  for (let i = 0; i < str1.length; i++) {
    // (w,o) --> (w,o) --> (o,o) -->
    for (let j = 0; j < str2.length; j++) {
      // (i + j) is used here to check with outer string next  character.
      if (str1[i + j] !== str2[j]) break;
      if (j === str2.length - 1) count += 1;
    }
  }
  return count;
};

console.log(naiveSearch("womg omgwomgkjomg", "omg"));
