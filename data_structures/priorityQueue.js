class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.value.push(newNode);
    this.bubbleUp();
    // bubbling up the element here by comparison of elements & swaping them at appropriate index
  }

  bubbleUp() {
    let index = this.value.length - 1;
    let indexEl = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.value[parentIndex];
      if (indexEl.priority <= parentEl.priority) break;
      this.value[parentIndex] = indexEl;
      this.value[index] = parentEl;
      index = parentIndex;
    }
  }

  dequeue() {
    let maxEl = this.value[0];
    let endEl = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = endEl;
      this.sinkDown();
    }
    return maxEl;
  }

  sinkDown() {
    let idx = 0;
    const arrLength = this.value.length;
    const element = this.value[idx];
    while (true) {
      // calculating left & right child index
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // checking if index is not out of bound i.e valid index
      // for left side or left child element
      if (leftChildIdx < arrLength) {
        leftChild = this.value[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      // similar as above for right child validity
      if (rightChildIdx < arrLength) {
        rightChild = this.value[rightChildIdx];
        // here we need to ensure that either swap is nulll or if swap is not null then rightChild should be more than left child
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();

// time complexity: insertion - O(logn) , removal: O(logn) , searching: O(n)
