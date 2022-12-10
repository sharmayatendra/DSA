class MaxBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
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
}

let heap = new MaxBinaryHeap();
