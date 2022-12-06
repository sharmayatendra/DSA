class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// inserting the new value to the specified index of a doublylinkedList

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return popNode;
  }

  shift() {
    if (this.length === 0) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= Math.floor(this.length / 2)) {
      count = 0;
      currentNode = this.head;
      for (let i = 0; i < this.length; i++) {
        if (index !== count) {
          currentNode = currentNode.next;
          count++;
        }
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      for (let i = this.length - 1; i >= 0; i--) {
        if (index !== count) {
          currentNode = currentNode.prev;
          count--;
        }
      }
    }
    return currentNode;
  }

  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let currentNode = this.get(index - 1);
    let afterNode = currentNode.next;

    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let nodeToDelete = this.get(index);
    let afterNode = nodeToDelete.next;
    let beforeNode = nodeToDelete.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    nodeToDelete.next = null;
    nodeToDelete.prev = null;
    this.length--;
    return nodeToDelete;
  }
}
