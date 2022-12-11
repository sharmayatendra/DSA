class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    this.value.push(val);
    // bubbling up the element here by comparison of elements & swaping them at appropriate index
    let index = this.value.length - 1;
    let indexEl = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.value[parentIndex];
      if (indexEl <= parentEl) break;
      this.value[parentIndex] = indexEl;
      this.value[index] = parentEl;
      index = parentIndex;
    }
  }

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      // similar as above for right child validity
      if (rightChildIdx < arrLength) {
        rightChild = this.value[rightChildIdx];
        // here we need to ensure that either swap is nulll or if swap is not null then rightChild should be more than left child
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
