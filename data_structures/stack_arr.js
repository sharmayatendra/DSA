let stack = [];

// push & pop inbuilt methods on array will serve the purpose of making stack

stack.push("1st element");
stack.push("2nd el");
stack.push("3rd el");

console.log(stack);

stack.pop();
console.log(stack);

// shift & unshift operation will also solve our purpose but its not much efficient since reindexing needs to done in this case.

let stack1 = [];

stack1.unshift(1);
stack1.unshift(2);
stack1.unshift(3);

stack1.shift();

console.log(stack1);
