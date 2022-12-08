let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

queue.shift();
queue.shift();

// this method is not efficient since all the reindexing needs to be done.

console.log(queue);

// slight more efficient approach:

let queue1 = [];

queue1.unshift(1);
queue1.unshift(2);
queue1.unshift(3);
queue1.unshift(4);

queue1.pop();
queue1.pop();
queue1.pop();

console.log(queue1);
