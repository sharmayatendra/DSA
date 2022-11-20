// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (str) => {
  if (str.length === 0) {
    return "";
  }
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
  // e      r   e    h
};

console.log(reverse("here i am"));
