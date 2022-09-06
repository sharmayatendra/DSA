// Time complexity:

// way of measuring the runtime or performance of our code. how optimize it is or it will going to be as the size of the input grows to large numbers.

// example - sum upto n numbers

function add(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addByFormula(n) {
  return (n * (n + 1)) / 2;
}

// both the above codes are correct but 2nd one is more efficient because its of O(1) complexity & 1st one is of O(n) complexity. Time complexity refers to number of operations that are happening to compute the output.

// Space complexity - We usually calculate the auxiliary space complexity that means we preassumed that the input is already big => whatever the variables we use in our code to write any logic how much space it is taking we only calculate that in space complexity.
