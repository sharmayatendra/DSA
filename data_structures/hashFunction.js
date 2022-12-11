// deterministic , should always give same output for same input , should about to operate in constant time.

const hash1 = (key, arrLength) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total + val) % arrLength;
  }
  return total;
};

// key i.e input limited to string only

const hash = (key, arrLength) => {
  let total = 0;
  let weirdPrime = 31;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * weirdPrime + val) % arrLength;
  }
  return total;
};
